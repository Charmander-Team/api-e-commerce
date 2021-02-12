const connDB = require("./config/db_connect");

const showAllCards = (req, res) => {

    let cards = [
        {
            title_list: "Nouveautés",
            list: []
        },
        {
            title_list: "Cartes Pokemon",
            list: []
        },
        {
            title_list: "Cartes dresseur",
            list: []
        }
    ];

    let [
        {list: news_cards_list},
        {list: pokemon_cards_list},
        {list: trainer_cards_list}
        ] = cards;

    const sql_news = "SELECT * FROM product WHERE date IS NOT NULL;";
    connDB.query(sql_news, (err, results) => {
        if (err) throw err;
        results.forEach((card_db) => {
            const current_ts = Date.now() / 1000;
            const { date: field_date } = card_db; //console.log(current);
            const field_date_ts = field_date.getTime() / 1000; //console.log(field_date_timestamp);
            const one_month_ts = 60 * 60 * 24 * 30;
            if (current_ts - field_date_ts <= one_month_ts) {
                let card = {
                    card_id: card_db.id,
                    img: card_db.image,
                    name: card_db.name,
                    ref: card_db.ref,
                    type: card_db.energy_type,
                    price: card_db.price,
                    bid: card_db.bid,
                    //date: card_db.date
                };
                news_cards_list.push(card);
            }
        });
        news_cards_list.length = 6; //console.log(news_cards_list.length);
    });

    const sql_pkm = 'SELECT * FROM product WHERE category_id = "1" ORDER BY RAND() LIMIT 6;';
    connDB.query(sql_pkm, (err, results) => {
        if (err) throw err;
        results.forEach(card_db => {
            let card = {
                card_id: card_db.id,
                img: card_db.image,
                name: card_db.name,
                ref: card_db.ref,
                type: card_db.energy_type,
                price: card_db.price,
                bid: card_db.bid
            };
            pokemon_cards_list.push(card);
        })
    });

    const sql_trainer = 'SELECT * FROM product WHERE category_id = "2" ORDER BY RAND() LIMIT 6';
    connDB.query(sql_trainer, (err, results) => {
        if (err) throw err;
        results.forEach(card_db => {
            let card = {
                card_id: card_db.id,
                img: card_db.image,
                name: card_db.name,
                ref: card_db.ref,
                type: card_db.energy_type,
                price: card_db.price,
                bid: card_db.bid
            };
            trainer_cards_list.push(card);
        })
        res.send(cards)
  });
};

const showLatestCards = (req, res) => {
  const current_ts = Date.now() / 1000;
  const sql = `SELECT * FROM product WHERE date IS NOT NULL`;

  connDB.query(sql, (err, results) => {
    if (err) throw err;
    let latest_cards = [];
    results.forEach((card_db) => {
      const { date: field_date } = card_db; //console.log(current);
      const field_date_ts = field_date.getTime() / 1000; //console.log(field_date_timestamp);
      const one_month_ts = 60 * 60 * 24 * 30;
      if (current_ts - field_date_ts <= one_month_ts) {
        let card = {
          category_id: card_db.id,
          img: card_db.image,
          name: card_db.name,
          ref: card_db.ref,
          type: card_db.energy_type,
          price: card_db.price,
          bid: card_db.bid,
        };
        latest_cards.push(card);
      }
    });
    res.send(latest_cards); console.log(latest_cards);
  });
};

const showCardByName = (req, res) => {
  let sql = `SELECT * FROM product WHERE name='${req.params.name}'`;
  connDB.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const showCardById = (req, res) => {
    let sql = `SELECT * FROM product WHERE id='${req.params.id}'`;
    connDB.query(sql, (err, results) => {
        if (err) throw err;
        let card = {
            category_id: results[0].id,
            img: results[0].image,
            name: results[0].name,
            ref: results[0].ref,
            type: results[0].energy_type,
            price: results[0].price,
            bid: results[0].bid,
        }
        res.send(card);
    });
};

const showCardsByType = (req, res) => {
  let sql = `SELECT * FROM product WHERE energy_type='${req.params.type}'`;
  connDB.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const addSalamecheCard = (req, res) => {
  // recuperation du dernier product de la table product
  const maxId = "SELECT max(Id) FROM product";

  connDB.query(maxId, (err, results) => {
    if (err) throw err;

    const lastCardId = results[0]["max(Id)"];

    const salameche = {
      ref: "test",
      category_id: 3,
      name: "salameche",
      energy_type: "fire",
      level: 15,
      card_number: 30,
      //bid: null,
      price: 50,
      delete: null,
    };

    salameche.id = lastCardId + 1;

    const sql = "INSERT INTO product SET ?";

    connDB.query(sql, salameche, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

const deleteCard = (req, res) => {
  const sql = `DELETE FROM product WHERE id='${req.params.id}'`;
  connDB.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
};

const getClient = (req, res) => {
  const sql = `select * from user where password='${req.params.mdp}' and mail ='${req.params.mail}'`;
  let clientArray = [];
  connDB.query(sql, (err, results) => {
    results.forEach((user) => {
      let clientFormat = [
        {
          nom: user.name,
          prenom: user.firstname,
          mail: user.mail,
          mdp: user.password,
        },
      ];
      clientArray.push(clientFormat);
      res.send(clientArray);
    });
  });
};

const addClient = (req, res) => {
  const maxId = "SELECT max(Id) FROM user";
  connDB.query(maxId, (err, results) => {
    const lastClient = results[0]["max(Id)"];

    const client = {
      name: "Paul",
      firstname: "Michel",
      mail: "blabla@hotmail.fr",
      password: "testmdp",
      admin: 1,
    };

    client.id = lastClient + 1;

    const sql = "INSERT INTO user SET ?";

    connDB.query(sql, client, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
};

const getCategories = (req, res) => {
  const sql = `SELECT * FROM category`;

  connDB.query(sql, (err, results) => {
    if (err) throw err;
    let categoryArray = [];
    results.forEach((category) => {
      let categoryFormat = [
        {
          id: category.id,
          nom: category.name,
          image: category.image,
          supprimer: category.delete,
        },
      ];
      categoryArray.push(categoryFormat);
    });
    res.send(categoryArray);
  });
};

const addCategory = (req, res) => {
  const maxId = "SELECT max(Id) FROM category";
  connDB.query(maxId, (err, results) => {
    if (err) throw err;

    const lastCategory = results[0]["max(Id)"];

    const category = {
      name: "Feu",
      image: "https://www.g33kmania.com/wp-content/uploads/feu-symbole.png",
      delete: null,
    };

    category.id = lastCategory + 1;

    const sql = "INSERT INTO category SET ?";

    connDB.query(sql, category, (err, results) => {
      res.send(results);
    });
  });
};

module.exports = {
  showAllCards,
  showLatestCards,
  showCardByName,
  showCardById,
  showCardsByType,
  addSalamecheCard,
  deleteCard,
  getClient,
  addClient,
  getCategories,
  addCategory,
};

const getBackCardsByCategory = (category_id) => {
  const sql = 'SELECT * FROM product WHERE category_id = "1"';
  let all_cards = [];
  connDB.query(sql, (err, results) => {
    if (err) throw err;

    results.slice(0, 6).forEach((card_db) => {
      let card = {
        img: card_db.image,
        name: card_db.name,
        ref: card_db.ref,
        type: card_db.energy_type,
        price: card_db.price,
        bid: card_db.price,
      };
      all_cards.push(card);
    });
    //console.log(all_cards);
  });
  //console.log(all_cards);
  return all_cards;
};
/*
//update product
app.put('/api/products/:id',(req, res) => {
 let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
 let query = conn.query(sql, (err, results) => {
   if(err) throw err;
   res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
 });
*/
