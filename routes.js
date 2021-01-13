const handlers = require('./handlers');

const createRoutes = (app) => {

    app.get('/api/products', handlers.showAllCards);

    app.get('/api/products/:name', handlers.showCardByName);
}

module.exports = createRoutes;