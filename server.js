const app = require('./app')

const port = 8080;

app.listen(port, () => {
    console.log(`App esta corriendo en el puerto ${port}`);
})

