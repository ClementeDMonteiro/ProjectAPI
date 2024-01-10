// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const indexController = require('./controllers/indexController');
const supplierController = require('./controllers/supplierController');
const transactionController = require('./controllers/transactionController');
const { Schema } = mongoose;

app.use(express.json());

app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/ProductTracking');


app.get('/', function(req, res) {
 res.render('index', { title: 'My App', heading: 'Welcome', content: 'Hello, world!' });
});

app.get('/suppliers', supplierController.getSuppliers);
app.get('/transactions', transactionController.getTransactions);

// ... define other routes

app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});

exports.getIndex = function(req, res) {
 // ... rest of the code
};

//SCHEMA
const schema1 = new Schema({ name: String,
   description: String,
   price: Number,
   stockQuantity: Number });
const schema2 = new Schema({ name: String,
   email: String,
   number: Number });
const schema3 = new Schema({ type: String,
   product: String,
   quantity: Number,
   unityPrice: Number,
   totalPrice: Number,
   date: Number });

// MODELS
const model1 = mongoose.model('Products', schema1);
const model2 = mongoose.model('Supplier', schema2);
const model3 = mongoose.model('Transaction', schema3);

//POST
//POST PRODUCT
app.post("/post/Products", async(req,res)=>{
    console.log("inside post function");
   
        const data=new model1({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            stockQuantity:req.body.stockQuantity,
        })
        try {
            await data.save();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
   })
   
   //POST SUPPLIER
   app.post("/post/Supplier", async(req,res)=>{
    console.log("inside post function");
   
        const data=new model2({
            name:req.body.name,
            email:req.body.email,
            number:req.body.number,
        })
        try {
            await data.save();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
   })
   
   //POST TRANSACTION
   app.post("/post/Transaction", async(req,res)=>{
    console.log("inside post function");
   
        const data=new model3({
            type:req.body.type,
            product:req.body.product,
            quantity:req.body.quantity,
            unityPrice:req.body.unityPrice,
            totalPrice:req.body.totalPrice,
            date:req.body.date,
        })
        try {
            await data.save();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
   })
   


//FETCH ALL
//FETCH ALL PRODUCTS
app.get("/fetchall/Products", async (req,res)=>{
    try {
        const val = await model1.find();
        res.json(val);
    } catch (err) {
        console.log(err);
    }
   })
   
   //FETCH ALL SUPPLIERS
   app.get("/fetchall/Supplier", async (req,res)=>{
    try {
        const val = await model2.find();
        res.json(val);
    } catch (err) {
        console.log(err);
    }
   })
   
   //FETCH ALL TRANSACTIONS
   app.get("/fetchall/Transaction", async (req,res)=>{
    try {
        const val = await model3.find();
        res.json(val);
    } catch (err) {
        console.log(err);
    }
   })
   

//FETCH GET
app.get('/fetch/:number', async function(req, res){
 let fetchNumber = req.params.number;
 try {
     const val = await model1.findOne({number:fetchNumber});
     if (!val) {
         res.send("data does not exist");
     } else {
         res.send(val);
     }
 } catch (err) {
     res.send("ERROR");
 }
})
