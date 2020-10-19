
const fs = require('fs');
const Gatito = require('./models/gatitos.model');

const getGatitos = (req, res) => {
    fs.readFile(`${__dirname}/../assets/gatitos.txt`, ((err, data) => {

        dataJSON = JSON.parse(data);

        res.json({
            status: 'success',
            data: dataJSON,
        })
        if (err) {
            res.sendStatus(500).send("Algo anda mal");
        }
    }))
}


// const postGatitos = (req, res) => {
//     let nuevoGatitoAGuardar = req.body;

//     if (nuevoGatitoAGuardar) {
//         fs.readFile(`${__dirname}/../assets/gatitos.txt`, ((err, data) => {
//             const dataJSON = JSON.parse(data);
//             nuevoGatitoAGuardar.id = dataJSON.length;

//             dataJSON.push(nuevoGatitoAGuardar)

//             fs.writeFile(`${__dirname}/../assets/gatitos.txt`, JSON.stringify(dataJSON), (err) => {
//                 res.status(201).json({
//                     estado: "success",
//                     data: {
//                         nuevoGatitoAGuardar,
//                         createAt: new Date(),
//                     }
//                 })
//             })
//         }))
//     }
// }
const postGatitos = async (req, res) => {
    try {
        // una manera de hacerlo:
        // const gatito = new Gatito(req.body)
        // await gatito.save()

        // otra, mas breve:
        const gatito = await Gatito.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                gatito
            }
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err: err
        })
    }
};

const deleteGatitos = async (req, res) => {

    try {
        await Gatito.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: 'success',
            data: null
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err: err
        })
    }

    // fs.readFile(`${__dirname}/../assets/gatitos.txt`, ((err, data) => {
    //     const dataJSON = JSON.parse(data);
    //     idGatitoABorrar = Number(req.params.id);

    //     const arrGatitosFiltrados = dataJSON.filter(gato => gato.id !== idGatitoABorrar);

    //     fs.writeFile(`../assets/gatitos.txt`, JSON.stringify(arrGatitosFiltrados), (err) => {
    //         res.status(202).json({
    //             status: 'success',
    //             data: arrGatitosFiltrados,
    //         })
    //     })
    // }))
}


// const putGatitos = (req, res) => {
//     fs.readFile(`${__dirname}/../assets/gatitos.txt`, ((err, data) => {
//         const dataJSON = JSON.parse(data);
//         const idGatitoAEditar = Number(req.params.id);
//         const nuevoGatito = req.body;

//         let gatoEncontrado = dataJSON.find(gato => gato.id === idGatitoAEditar)

//         if (gatoEncontrado) {
//             let gatoActualizado = {
//                 id: gatoEncontrado.id,
//                 name: nuevoGatito.name,
//                 shortDesc: nuevoGatito.shortDesc,
//                 longDesc: nuevoGatito.longDesc,
//                 img: nuevoGatito.img,
//                 colores: nuevoGatito.colores,
//                 sexo: nuevoGatito.sexo,
//                 disponible: nuevoGatito.disponible,
//             }
//             let targetIndex = dataJSON.indexOf(gatoEncontrado);

//             dataJSON.splice(targetIndex, 1, gatoActualizado);

//             fs.writeFile(`${__dirname}/../assets/gatitos.txt`, JSON.stringify(dataJSON), (err) => {
//                 res.status(201).json({
//                     status: 'success',
//                     data: dataJSON
//                 });
//             })
//         } else {
//             res.sendStatus(404);
//         }
//     }))
// }

const putGatitos = async (req, res) => {
    try {
        await Gatito.replaceOne({ _id: req.params.id }, req.body)
        res.status(200).json({
            status: 'success',
            data
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err: err
        })
    }
}

const patchGatito = async (req, res) => {
    try {
        const gatito = await Gatito.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: {
                gatito
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            err: err
        })
    }

}

module.exports = { getGatitos, postGatitos, putGatitos, deleteGatitos, patchGatito }