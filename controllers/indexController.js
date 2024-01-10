const productsModel = require('../models/products');

exports.getIndex = function(req, res) {
    productsModel.getProducts().then(function(products) {
        res.render('index', { title: 'Home', products: products });
    }).catch(function(error) {
        console.log(error);
    });
   };
   
