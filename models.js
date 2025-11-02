// Se importa el módulo mongoose para trabajar con MongoDB
const mongoose = require('mongoose'); 
// Se define el esquema (estructura) para los documentos de la colección "usuarios"
const userModel = new mongoose.Schema(
    {
        // Campo 'user' de tipo String para el nombre del usuario
        user: { 
            type: String
        },
        // Campo 'password' de tipo String para la contraseña del usuario
        password: {
            type: String
        }
    },
    {
        // Se agrega automáticamente la fecha de creación y actualización (createdAt, updatedAt)
        timestamps: true,
        // Se desactiva el campo __v que usa mongoose para el control de versiones
        versionKey: false,
    }
)
// Se crea el modelo 'ModelUser' basado en el esquema anterior, apuntando a la colección "usuarios"
const ModelUser = mongoose.model("usuarios", userModel);
// Se exporta el modelo para que pueda ser utilizado en otros archivos del proyecto
module.exports = ModelUser;