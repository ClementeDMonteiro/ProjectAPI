const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/ProductTracking";
const client = new MongoClient(uri);

module.exports = client;

async function main() {
 try {
     await client.connect();

     const database = client.db('ProductTracking');
     const productsCollection = database.collection('Products');
     const supplierCollection = database.collection('Supplier');
     const transactionCollection = database.collection('Transaction');

     const productsCursor = productsCollection.find();
     if ((await productsCursor.count()) === 0) {
         console.log("No Products documents found!");
     } else {
         await productsCursor.forEach(doc => console.log(doc));
     }

     const supplierCursor = supplierCollection.find();
     if ((await supplierCursor.count()) === 0) {
         console.log("No Supplier documents found!");
     } else {
         await supplierCursor.forEach(doc => console.log(doc));
     }

     const transactionCursor = transactionCollection.find();
     if ((await transactionCursor.count()) === 0) {
         console.log("No Transaction documents found!");
     } else {
         await transactionCursor.forEach(doc => console.log(doc));
     }
 } finally {
     await client.close();
 }
}

main().catch(console.error);
