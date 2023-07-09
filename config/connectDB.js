const mongoose = require('mongoose')


const connectDB = async () => { // funcion que crea la conexion
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (error) {
        console.log('error fue : ' + error);
    }
}

module.exports = connectDB