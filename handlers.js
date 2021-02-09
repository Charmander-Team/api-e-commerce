const mysql = require('mysql');
const connDB = require('./config/db_connect');


const showAllCards = (req, res) => {

    let cards = [
        {
            category_id: "1",
            list: []
        },
        {
            category_id: "2",
            list: []
        }
    ];

    let [
        {list: list1},
        {list: list2}
        ] = cards;


    const sql1 = 'SELECT * FROM product WHERE category_id = "1" LIMIT 6';
    connDB.query(sql1, (err, results) => {
        if (err) throw err;
        results.forEach(card_db => {
            let card = {
                img: card_db.image,
                name: card_db.name,
                ref: card_db.ref,
                type: card_db.energy_type,
                price: card_db.price,
                bid: card_db.price
            };
            list1.push(card);
        })
    });

    const sql2 = 'SELECT * FROM product WHERE category_id = "2" LIMIT 6';
    connDB.query(sql2, (err, results) => {
        if (err) throw err;
        results.forEach(card_db => {
            let card = {
                img: card_db.image,
                name: card_db.name,
                ref: card_db.ref,
                type: card_db.energy_type,
                price: card_db.price,
                bid: card_db.price
            };
            list2.push(card);
        })
        res.send(cards)

    });

/*
    res.send(cards)
*/
};

const showLatestCards = (req, res) => {

    const current_ts = Date.now()/1000;
    const sql = `SELECT * FROM product WHERE date IS NOT NULL`;

    connDB.query(sql, (err, results) => {
        if(err) throw err;
        let latest_cards = [];
        results.forEach(card_db => {
            const {'date': field_date} = card_db; //console.log(current);
            const field_date_ts = field_date.getTime()/1000; //console.log(field_date_timestamp);
            const one_month_ts = 60 * 60 * 24 * 30;
            if ( current_ts - field_date_ts <= one_month_ts) {
                let card = {
                    id_category: card_db.id_category,
                    img: card_db.image,
                    name: card_db.name,
                    ref: card_db.ref,
                    type: card_db.energy_type,
                    price: card_db.price,
                    bid: card_db.price
                }
            latest_cards.push(card);
            }
        })
        res.send(latest_cards);
    });
};

const showCardByName = (req, res) => {
    let sql = `SELECT * FROM product WHERE name='${req.params.name}'`;
    connDB.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results)
    });
};

const showCardsFromType = (req, res) => {
   let sql = `SELECT * FROM product WHERE energy_type='${req.params.type}'`;
   connDB.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results)
   });
}

const addSalamecheCard = (req, res) => {

    // recuperation du dernier product de la table product
    const maxId = 'SELECT max(Id) FROM product';

    connDB.query(maxId, (err, results) => {
        if(err) throw err;

        const lastCardId = results[0]['max(Id)'];

        const salameche = {
            ref: "test",
            category_id: 3,
            name: "salameche",
            energy_type : "fire",
            level: 15,
            card_number: 30,
            //bid: null,
            price: 50,
            delete: null
        };

        salameche.id = lastCardId + 1;

        const sql = 'INSERT INTO product SET ?';

        connDB.query(sql, salameche, (err, results) => {
            if(err) throw err;
            res.send(results);
        });
    });
}

const deleteCard = (req, res) => {
    let sql = `DELETE FROM product WHERE id='${req.params.id}'`;
    connDB.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results)
    });
}

module.exports = {
    showAllCards,
    showLatestCards,
    showCardByName,
    showCardsFromType,
    addSalamecheCard,
    deleteCard
};



const getBackCardsByCategory = (category_id) => {
    const sql = 'SELECT * FROM product WHERE category_id = "1"';
    let all_cards = [];
    connDB.query(sql, (err, results) => {
        if (err) throw err;

        results.slice(0, 6).forEach(card_db => {
            let card = {
                img: card_db.image,
                name: card_db.name,
                ref: card_db.ref,
                type: card_db.energy_type,
                price: card_db.price,
                bid: card_db.price
            };
            all_cards.push(card);
        })
        //console.log(all_cards);
    });
    //console.log(all_cards);
    return all_cards;
}
/*
//update product
app.put('/api/products/:id',(req, res) => {
 let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
 let query = conn.query(sql, (err, results) => {
   if(err) throw err;
   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
 });
*/
