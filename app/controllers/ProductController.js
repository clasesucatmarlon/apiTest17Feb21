// Controlador de productos

const Product = require('../models/Product')  // Modelo

// Funciones que responde a cada ruta
// ******************************************************

// Listar todos los elementos.  Devuelve una promesa
function index(req,res){
    Product.find({})
        .then(products => {
            if(products.length) return res.status(200).send({products});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

//  Listar un o algunos elementos
function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'NOT FOUND'});
    let products = req.body.products;
    return res.status(200).send({products});
    
}

// Crear elemento
function create(req,res){
    new Product(req.body).save().then(product => res.status(201).send({product})).catch(error => res.status(500).send({error}));
}

// Actualizar elemento
function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'NOT FOUND'});
    let product = req.body.products[0];
    product = Object.assign(product,req.body);
    product.save().then(product => res.status(200).send({message: "UPDATED", product})).catch(error => res.status(500).send({error}));
}

// Eliminar elemento
function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'NOT FOUND'});
    req.body.products[0].remove().then(product => res.status(200).send({message: 'REMOVED', product})).catch(error => res.status(500).send({error}));
}

// Buscar elemento.  Midleware: controlador que se ejecuta en el medio de otros controladores
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Product.find(query).then(products => {
        if(!products.length) return next();
        req.body.products = products;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}
