// supplierController.js
const supplierModel = require('../models/supplier');

exports.getSuppliers = function(req, res) {
  supplierModel.getSuppliers(function(suppliers, error) {
    if (error) {
      // Trate o erro como achar adequado
      console.log(error);
      res.status(500).send('Erro ao buscar fornecedores');
    } else {
      res.render('index', { title: 'Home', suppliers: suppliers });
    }
  });
};
