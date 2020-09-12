const fs = require('fs');
const express = require('express');
const app = express();
const userRouter = require('./routes/UserRoutes');
const gatitosRouter = require('./routes/gatitoRoutes');
const refugioRouter = require('./routes/refugioRoutes')



app.use(express.json());

// app.get('/', ((req, res) => {
//     res.send("Hola desde express")
// }))

app.use('/gatitos', gatitosRouter)
app.use('/users', userRouter)
app.use('/refugios', refugioRouter)

module.exports = app;