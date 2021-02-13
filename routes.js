const handlers = require('./handlers');

const createRoutes = (app) => {

    app.get('/products', handlers.showAllCards);

/*    app.get('/products/id/:id', handlers.showCardById);

    app.get('/products/name/:name', handlers.showCardByName);

    app.get('/products/type/:type', handlers.showCardsByType);

    app.post('/api/products/salameche', handlers.addSalamecheCard);

    app.delete('/api/products/:id', handlers.deleteCard);


    app.get("/api/client/mdp/:mdp/mail/:mail", handlers.getClient);

    app.post("/api/client", handlers.addClient);

    app.get("/api/categories", handlers.getCategories);

    app.post("/api/category", handlers.addCategory);*/
}

module.exports = createRoutes;