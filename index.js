require('dotenv').config();

//Leer el archivo server/index.js
const server = require('./server');

const PORT = process.env.port || 8091
server.listen(PORT, () => console.log(`Server is live at localhost: ${PORT}`));

