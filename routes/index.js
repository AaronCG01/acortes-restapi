//Se importa la clase Roter de express
const { Router } = require('express');

//Se incluye el archivo de los controles provenientes de 'controllers/index.js'
const controllers = require('../controllers');

//Se crea un objeto de la clase Router
const router = Router();

//La ruta que solo tenga la diagonal, mandará un mensaje de prueba
router.get('/', (req, res) => res.send('Welcome to my API'));

//Post sirve para insertar un nuevo usuario
router.post('/users', controllers.createUser);

//Get sirve para obtener todos los usuarios
router.get('/users', controllers.getAllUsers);

module.exports = router;