const { Card } = require('../models/models.js');

const getCards = (req, res, next) => {
    Card.find({})
        .then((card) => {
            res.send(card);
        })
        .catch(next);
};

const getCardById = (req, res, next) => {
    const id = req.params.id;

    Card.findById({_id: id})
        .then((card) => {
            res.send(card);
        })
        .catch(next);
};

const addCard = (req, res, next) => {
    const newCard = req.body;

    Card.create(newCard)
        .then((card) => {
            res.send(card);
        })
        .catch(next);
};

const updateCardById = (req, res, next) => {
    const id = req.params.id;

    Card.findByIdAndUpdate({_id: id}, req.body)
        .then(() => {
            Card.findOne({_id: id}).then((newCard) => {
                res.send(newCard);
            });
        })
        .catch(next);
};

const deleteCardById = (req, res, next) => {
    const id = req.params.id;

    Card.findByIdAndDelete({_id: id})
        .then((card) => {
            res.send(card);
        })
        .catch(next);
};

module.exports = {
    getCards,
    getCardById,
    addCard,
    updateCardById,
    deleteCardById,
};