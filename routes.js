const handlers = require('./handlers');

const createRoutes = (app) => {

    app.get('/api/products', handlers.showAllCards);

    app.get('/api/products/:name', handlers.showCardByName);

    app.get('/api/products/type/:type', handlers.showCardsFromType);

    app.post('/api/products/salameche', handlers.addSalamecheCard);

}

module.exports = createRoutes;