const controller = require('../controllers/controller.js')

const createRoutes = (app) => {

    app.get('/cards', controller.getCards);

    app.get('/card/:id', controller.getCardById);

    app.post('/card/', controller.addCard);

    app.put('/card/:id', controller.updateCardById);

    app.delete('/card/:id', controller.deleteCardById )

}

module.exports = createRoutes;