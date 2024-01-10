// /models/transaction.js
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

let _db;

module.exports = {
   connectToServer: function(callback) {
       MongoClient.connect(url, function(err, client) {
           if (err) throw err;
           _db = client.db(dbName);
           callback();
       });
   },

   getDb: function() {
       return _db;
   },

   getTransactions: function(callback) {
       _db.collection('transaction').find({}).toArray(function(err, docs) {
           if (err) throw err;
           callback(docs);
       });
   }
};
