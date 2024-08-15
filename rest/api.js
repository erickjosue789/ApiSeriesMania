var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');


const Usuario = require('../models').usuario;
const Rol = require('../models').rol;

const Serie = require('../models').serie;
const Genero = require('../models').genero;
const Seriegenero = require('../models').seriegenero;

//URL - /rest/Api

//GET-All USERS
router.get('/AllUsers/json', function (req, res, next) {
    Usuario.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt", "role_id"]
        },
        include: [{
            model: Rol,
            attributes: ['descripcion']
        }],
    })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});

//POST - LOGIN USUARIO
router.post('/verifyUser', function (req, res, next) {
    let usuario = req.body.usuario;   // Cambia req.query por req.body
    let contraseña = req.body.password;

    Usuario.findOne({
        attributes: {
            exclude: ["updatedAt", "createdAt", "role_id"]
        },
        include: [{
            model: Rol,
            attributes: ['descripcion']
        }],
        where: {
            [Op.and]: [
                { usuario: usuario },
                { contraseña: contraseña }
            ]
        }
    })
        .then(usuario => {
            if (usuario) {
                res.json(usuario);
            } else {
                res.status(404).json({ message: "Usuario o contraseña incorrectos" });
            }
        })
        .catch(error => res.status(400).send(error));
});

//NUEVOS USUARIOS
router.post('/NuevoUsuario', function (req, res, next) {
    let { nombre, apellido, usuario, contraseña, role_id } = req.body;

    Usuario.create({
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        contraseña: contraseña,
        role_id: role_id,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(usuario => {
            res.json(usuario);
        })
        .catch(error => res.status(400).send(error))
});


//GET-All GENEROS
router.get('/AllGeneros/json', function (req, res, next) {
    Genero.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        }
    })
        .then(generos => {
            res.json(generos);
        })
        .catch(error => res.status(400).send(error))
});


//GET-All SERIES
router.get('/Allseries/json', function (req, res, next) {
    Serie.findAll({
        attributes: {
            exclude:
                ["updatedAt", "createdAt"]
        },
        include: [{
            model: Genero,
            attributes: ['descripcion'],
            through: { attributes: [] }
        }],
    })
        .then(series => {
            res.json(series);
        })
        .catch(error => res.status(400).send(error))
});


//GET-id SERIE
router.get('/findById/:id/json', function (req, res, next) {
    let id = parseInt(req.params.id);

    Serie.findAll({
        attributes: {
            exclude: ["updatedAt", "createdAt"]
        },
        include: [{
            model: Genero,
            attributes: ['descripcion'],
            through: { attributes: [] }
        }],
        where: {
            [Op.and]: [
                { id: id }
            ]
        }
    })
        .then(series => {
            res.json(series);
        })
        .catch(error => res.status(400).send(error))
});

// Configurar el directorio de imágenes
const imageDir = path.join(__dirname, '../public/images');

// Verifica si la carpeta existe, si no, créala
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

//CREAR NUEVA SERIE
router.post('/NuevaSerie', function (req, res, next) {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../public/images');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).send(err);
        }

        console.log('Fields:', fields);
        console.log('Files:', files);

        // Acceder al primer elemento del array para cada campo
        const nombre = fields.nombre[0];
        const descripcion = fields.descripcion[0];
        const rating = parseFloat(fields.rating[0]);  // Convertir a número
        const imageFile = files.imageFile[0];

        if (!imageFile) {
            return res.status(400).send('No se subió ninguna imagen.');
        }

        // Crear la ruta para guardar la imagen con el nombre de la serie
        const newPath = path.join(form.uploadDir, `${nombre}.jpg`);
        fs.rename(imageFile.filepath, newPath, (err) => {
            if (err) {
                return res.status(500).send(err);
            }

            // Guardar la ruta de la imagen en la base de datos
            Serie.create({
                nombre: nombre,
                descripcion: descripcion,
                rating: rating,
                imagen: `/images/${nombre}.jpg`,
                createdAt: new Date(),
                updatedAt: new Date()
            })
                .then(serie => {
                    res.json(serie);
                })
                .catch(error => res.status(400).send(error));
        });
    });
});


//Actualizar SERIE
router.put('/ActualizarSerie', function (req, res, next) {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../public/images');
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).send(err);
        }

        // Extraer los primeros elementos de los arrays en fields
        let serieId = parseInt(fields.serieId[0]);
        let nombre = fields.nombre[0];
        let descripcion = fields.descripcion[0];
        let rating = parseFloat(fields.rating[0]);
        let id_genero = fields.id_genero ? parseInt(fields.id_genero[0]) : null;

        // Verificar si se subió una nueva imagen
        const imageFile = files.imageFile ? files.imageFile[0] : null;

        // Crear la ruta para guardar la nueva imagen, si existe
        let imagenPath = null;
        if (imageFile) {
            imagenPath = `/images/${nombre}.jpg`;
            const newPath = path.join(form.uploadDir, `${nombre}.jpg`);
            fs.rename(imageFile.filepath, newPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
        }

        // Actualizar la información de la serie
        Serie.update({
            nombre: nombre,
            descripcion: descripcion,
            rating: rating,
            imagen: imagenPath || fields.imagen[0], // Mantener la imagen existente si no se subió una nueva
            updatedAt: new Date()
        },
        {
            where: {
                id: serieId
            }
        })
        .then(respuesta => {
            // Si se actualizó la serie, proceder a actualizar el género
            if (respuesta[0] > 0 && id_genero) {
                // Eliminar las asociaciones anteriores en Seriegenero
                return Seriegenero.destroy({ where: { serie_id: serieId } })
                    .then(() => {
                        // Crear la nueva asociación con el género
                        return Seriegenero.create({
                            serie_id: serieId,
                            genero_id: id_genero
                        });
                    });
            }
            return respuesta;
        })
        .then(() => {
            // Recuperar la serie actualizada con su género asociado
            return Serie.findOne({
                where: { id: serieId },
                include: [{
                    model: Genero,
                    attributes: ['descripcion'],
                    through: { attributes: [] }
                }]
            });
        })
        .then(serieActualizada => {
            res.json(serieActualizada);
        })
        .catch(error => res.status(400).send(error));
    });
});


//ELIMINAR SERIE
router.delete('/delete/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    Serie.destroy({
        where: {
            id: id
        }
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error => res.status(400).send(error))
});


module.exports = router;
