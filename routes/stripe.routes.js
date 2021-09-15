module.exports = app => {

    const config = require('../config/config.js');
    const router = require("express").Router();

    const stripe = require('stripe')(config.stripe_secret_key);

    router.post('/payment', function(req, res){

        // Moreover you can take more details from user
        // like Address, Name, etc from form
        stripe.customers.create({
            source: req.body.stripeToken,
            name: req.body.name,
            billing_details: {
                address: {
                    line1: req.body.address,
                    postal_code: req.body.zip,
                    city: req.body.city,
                    country: req.body.country,
                },
                email: req.body.mail,
                phone: req.body.phone,
            }
        })
            .then((customer) => {

                return stripe.charges.create({
                    amount: 50000,
                    description: 'Pokeversement',
                    currency: 'EUR',
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
