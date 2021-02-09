const handlers = require('./handlers');

const createRoutes = (app) => {

    app.get('/products', handlers.showAllCards);

    app.get('/products/name/:name', handlers.showCardByName);

    app.get('/products/type/:type', handlers.showCardsFromType);

    app.get('/news/products', handlers.showLatestCards);

    app.post('/api/products/salameche', handlers.addSalamecheCard);

    app.delete('/api/products/:id', handlers.deleteCard);

}

module.exports = createRoutes;