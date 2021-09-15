module.exports = app => {

    const config = require('../config/config.js');
    const router = require("express").Router();

    const stripe = require('stripe')(config.stripe_secret_key);

    router.post('/payment', function(req, res){

        // Moreover you can take more details from user
        // like Address, Name, etc from form
        stripe.customers.create({
            name: 'Gourav Hammad',
            address: {
                line1: 'TC 9/4 Old MES colony',
                postal_code: '452331',
                city: 'Indore',
                state: 'Madhya Pradesh',
                country: 'India',
            }
        })
            .then((customer) => {

                return stripe.charges.create({
                    amount: 2500,     // Charing Rs 25
                    description: 'Web Development Product',
                    currency: 'INR',
                    customer: customer.id
                });
            })
            .then((charge) => {
                res.send("Success")  // If no error occurs
            })
            .catch((err) => {
                res.send(err)       // If some error occurs
            });
    })

    app.use('/api/stripe', router);
};
