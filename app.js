const express = require ("express");
const dbconnect = require("./config");
const ModelUser= require("./models");
const app = express();

const router = express.Router(); // Se crea un enrutador para manejar rutas de forma modular

//create' (Ruta para crear un nuevo usuario)
router.post('/', async (req, res) => { // Se define una ruta POST en la raíz del router
    const body = req.body; // Aquí se intenta obtener datos del cuerpo de la solicitud (¡esto es incorrecto!)
    const respuesta = await ModelUser.create(body) // Se crea un nuevo documento en la base de datos con los datos recibidos
    res.send(respuesta)  // Se envía la respuesta al cliente con el objeto creado
})

app.use(express.json()); //usar en este proyecto a partir de expres el formato json y tambien 
app.use(router); //tenemos qu decirle qu se usa por el router, para pderse coecta

app.listen(3005, () => { // Se pone a escuchar el servidor en el puerto 3005
    console.log("el servidor está en el puerto 3005 ") // Mensaje en consola cuando el servidor está activo
})


router.get('/', async (req, res) => { // Se define una ruta get en la raíz del router
    const body = req.body; // Aquí se intenta obtener datos del cuerpo de la solicitud (¡esto es incorrecto!)
    const respuesta = await ModelUser.create(body) // Se crea un nuevo documento en la base de datos con los datos recibidos
    res.send(respuesta)  // Se envía la respuesta al cliente con el objeto creado
})

app.use(express.json()); //usar en este proyecto a partir de expres el formato json y tambien 
app.use(router); //tenemos qu decirle qu se usa por el router, para pderse coecta



dbconnect();