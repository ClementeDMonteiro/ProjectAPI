// transactionController.js
const transactionModel = require('../models/transaction');

exports.getTransactions = function(req, res) {
 transactionModel.getTransactions(function(transactions) {
    res.render('transactions', { title: 'Transactions', transactions: transactions });
 });
};
