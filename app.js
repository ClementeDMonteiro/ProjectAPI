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
const sch=new Schema({
    name:String,
    email:String,
    id:Number,
    description:String,
    price:Number,
    stockQuantity:Number,
    quantity:Number,
    date:Number,
},{versionKey:false})

const monmodel=mongoose.model("NEWCOL",sch);

//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");

        const data=new monmodel({
            name:req.body.name,
            email:req.body.email,
            id:req.body.id,
            description:req.body.description,
            price:req.body.price,
            stockQuantity:req.body.stockQuantity,
            quantity:req.body.quantity,
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
app.get("/fetchall", (req,res)=>{
    monmodel.find((err,val)=>{
        if(err)
        {
            console.log(err)
        }else{
            res.json(val)
        }
    })
})

//FETCH GET
app.get('/fetch/:id',function(req,res){
    let fetchid = parseInt(req.params.id);
    monmodel.findOne(({id:fetchid}),function(err,val){
        if(err)
        {
            res.send("ERROR")
        }else{
            if(val.length==0)
            {
                res.send("data does not exist");
            }else{
                res.send(val);
            }
        }
    })
})