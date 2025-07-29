// import modules
// reuire() function used to import modules
const express = require(`express`);
const cors = require(`cors`);
const {MongoClient, ServerApiVersion} = require(`mongodb`);
const {default: cli} = require(`@angular/cli`);

// create Rest object
const app = express();
// where "app" objcet called as Rest object
// "app" object is used to create GET,POST,PUT,DELETE request

//enable cors policy
app.use(cors());

// set JSON as MINE type
app.use(express.json());

// create client object
const client = new MongoClient("mongodb+srv://admin:admin@cluster0.mwgcxs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

// create POST request
app.post("/watches", async (req, res) =>{
    // read obj coming from react (frontend)
    const obj = req.body;

    //read pcost
    let pcost = parseFloat(obj.pcost);

    // read discount
    let discount = parseFloat(obj.discount);

    // calculate gst
    let gst = pcost * 3/100;

    // calculate tax
    let tax = pcost * 3/100;

    // calculate invoice amount
    let invoice = pcost + gst + tax - (pcost * discount)/100;

    // convert pid to integer
    let pid = parseInt(obj.pid);

    obj.pid = pid;
    obj.gst = gst;
    obj.tax = tax;
    obj.invoice = invoice;

    await client.connect();
    const {acknowledged} = await client.db("watches_db").collection("watches").insertOne(obj);
    acknowledged ? res.status(200).json({message:"Watch Inserted Successfully !!!"}) : res.status(400).json({message: "Watch Not Inserted"});
});

// create GET request
app.get("/mobiles", async (req, res)=>{
    await client.connect();
    const arr = await client.db("watches_db").collection("watches").find({}).toArray();
    arr.length > 0 ? res.status(200).json(arr) : res.status(400).json({message:"No Data Found"});
});

// create DELETE request
app.delete("/mobiles", async (req, res)=>{
    await client.connect();
    let pid = parseInt(req.body.pid);
    const {acknowledged} = await client.db("watches_db").collection("watches").deleteOne({pid:pid});
    acknowledged ? res.status(200).json({message:"Watch Deleted Successfully !!!"}) : res.status(400).json({message:"Watch Not Deleted"});
});

// create PUT request
app.put("/mobiles", async (req, res)=>{
    let obj = req.body;

    let pid = parseInt(obj.pid);
    let pcost = parseInt(obj.pcost);
    let discount = parseInt(obj.discount);
    let gst = pcost * 3/100;
    let tax = pcost * 3/100;
    let invoice = pcost + gst + tax - (pcost*discount)/100;
    obj.gst = gst;
    obj.tax = tax;
    obj.invoice = invoice;
    await client.connect();
    const {acknowledged} = await client.db("watches_db").collection("watches").updateOne({pid:pid}, {$set:obj});
    acknowledged ? res.status(200).json({message:"Watch Updated Successfully !!!"}) : res.status(400).json({message:"Watch Not Updated"});
});

// assign the port
app.listen(6050, ()=>{
    console.log("Server Started at 6050");
});