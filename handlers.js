//const connDB = require("./config/db_connect");
const sequelize = require("sequelize");
const DataTypes = require("./config/db_connect");
const product = require("./models/product")(sequelize, DataTypes);

const showAllCards = (req, res) => {

  product.findAll().then( (result) => res.json(result) )


};

/*
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
*/

module.exports = {
  showAllCards,
/*  showCardByName,
  showCardById,
  showCardsByType,
  addSalamecheCard,
  deleteCard,
  getClient,
  addClient,
  getCategories,
  addCategory,*/
};