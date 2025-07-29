//import modules
//require() function used to import modules
const express = require('express');
const cors = require('cors');
const { MongoClient,ServerApiVersion } = require('mongodb');


//create client object
const client = new MongoClient("mongodb+srv://admin:admin@fns.h78yfoh.mongodb.net/?retryWrites=true&w=majority&appName=FNS", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

//create express object (app)
//app object used to develop GET,POST,PUT,DELETE APIs
const app = express();

//enable cors policy
app.use(cors());


//set JSON as MIME Type
app.use(express.json());

//GET Request
app.get("/laptops", async (req, res) => {
    await client.connect();
    const arr1 = await client.db("laptops_db").collection("laptops").find({}).toArray(); 
    res.json(arr1);
});


//GET Request By pid
app.get("/laptops/:pid", async (req, res) => {
    await client.connect();
    const obj = await client.db("laptops_db")
                            .collection("laptops")
                            .findOne({"pid":parseInt(req.params.pid)}); 
    res.json(obj);
});


//POST Request
app.post("/laptops", async (req, res) => {

    let pcost = parseInt(req.body.pcost);
    let discount = parseFloat(req.body.discount);

    let gst = (pcost * 3) / 100;
    req.body.gst = gst;

    let tax = (pcost * 3) / 100;
    req.body.tax = tax;

    let invoice = pcost + gst + tax - (discount * pcost) / 100;
    req.body.invoice = invoice;

    let pid = parseInt(req.body.pid);
    req.body.pid = pid;

    await client.connect();
    const result = await client.db("laptops_db").collection("laptops").insertOne(req.body);

    let {acknowledged} = result;

    if(acknowledged) {
        res.json({
            message: "Laptop Added Successfully"
        });
    }else{
        res.json({
            message: "Laptop Not Added"
        });
    }
});


//PUT Request
app.put("/laptops", async (req,res)=>{
    let discount = parseFloat(req.body.discount);
    
    let invoice = parseFloat(req.body.pcost) - (discount * parseFloat(req.body.pcost) / 100 + parseFloat(req.body.gst) + parseFloat(req.body.tax));
    req.body.invoice = invoice;

    await client.connect();
    const result = await client.db("laptops_db")
                              .collection("laptops")
                              .updateOne({"pid":parseInt(req.body.pid)},{$set:req.body});
    const {acknowledged} = result;
    if(acknowledged) {
        res.json({
            message: "Laptop Updated Successfully"
        });
    }
    else{
        res.json({
            message: "Laptop Not Updated"
        });
    }
});

//Delete Request
app.delete("/laptops", async (req,res)=>{
    await client.connect();
    const result = await client.db("laptops_db")
                              .collection("laptops")
                              .deleteOne({"pid":parseInt(req.body.pid)});
    const {acknowledged} = result;
    if(acknowledged) {
        res.json({
            message: "Laptop Deleted Successfully"
        });
    }
    else{
        res.json({
            message: "Laptop Not Deleted"
        });
    }
});

//assign the port no
app.listen(9090, () => {
    console.log("Server is running on port 9090");
});