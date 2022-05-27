const UserController = require('../controllers/user.controller');
const authenticate = require('../config/authenticate');
const LibroController = require('../controllers/libro.controller')

module.exports = function(app){

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);  
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", /* authenticate, */ UserController.getAll);
    app.get('/api/user/:id',/*  authenticate, */ UserController.getUser);  

    //Rutas Piratas
    app.post("/api/libros/new",LibroController.createNewLibro);
    app.get("/api/libros",LibroController.findAllLibros);
    app.get("/api/libros/:id",LibroController.findOneLibro);
    //app.post("/api/piratas/changeskill/:skill/:id",PirataController.changeSkill);
    app.put("/api/libros/update/:id",LibroController.updateLibro);
    app.delete("/api/libros/delete/:id",LibroController.deleteLibro);

//DESCARGA
    /* app.get("/descargar/:id",LibroController.downloadLibro); */
} 