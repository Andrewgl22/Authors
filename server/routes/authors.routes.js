const authorController = require('../controllers/authors.controller');

module.exports = (app) => {
    app.get('/api', authorController.home);
    app.post('/api/new', authorController.new);
    app.get('/api/one/:id', authorController.getOne);
    app.put('/api/edit/:id', authorController.edit);
    app.delete('/api/delete/:id', authorController.delete);
}

