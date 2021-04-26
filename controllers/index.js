//Se especifican los modelos sobre los que se va a trabajar
const models = require("../database/models");

//Se especifica el método para la creación de un nuevo usuario
const createUser = async (req, res) => {
    try {
        //Genera una sentencia SQl tipo 'INSERT INTO...'
        const user = await models.User.create(req.body);
        //Código 201: insertado OK
        return res.status(201).json({
            user
        });
    } catch (error) {
        //Código 500: error del lado del server
        return res.status(500).json({error: error.message});
    }
};

//Se especifica el método para obtener TODOS los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await models.User.findAll({
            include: []
        });
        //Código 200: ejecutado con éxito
        return res.status(200).json({
            users
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    createUser,
    getAllUsers
};