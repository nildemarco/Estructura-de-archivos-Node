const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app')
const mongoose = require('mongoose')
//const env = require('./.env');

const port = 8080;

const password = process.env.MONGO_PASSWORD
const userName = process.env.MONGO_USERNAME
const dbMongo = process.env.MONGO_USERNAME
console.log(password)

mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.hindp.mongodb.net/${dbMongo}?retryWrites=true&w=majority`, { dbName: 'ada' },
    err => (err ? console.log(err) : console.log('Conectado a la base de datos')))

app.listen(port, () => {
    console.log(`App esta corriendo en el puerto ${port}`);
})

