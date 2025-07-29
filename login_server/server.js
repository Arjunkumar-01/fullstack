const express = require(`express`);
const cors = require(`cors`);
const { MongoClient, ServerApiVersion } = require(`mongodb`);

const app = express();

app.use(cors());

app.use(express.json());

const client = new MongoClient("mongodb+srv://admin:admin@cluster0.mwgcxs5.mongodb.net/?appName=Cluster0", {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  // POST request
  app.post("/login", async (req, res)=>{

    let { username, password } = req.body;
    await client.connect();
    let obj = await client.db("login_db").collection("login").findOne({username:username});
    if(obj) {
        if(obj.password === password) {
            res.status(200).json({message:"Login Successful"});
        } else {
            res.json({message:"Invalid Password"});
        }
    } else {
        res.json({message:"Login Fail"});
    }
});


app.listen(5000, ()=>{
    console.log("Server started at 5000");
});