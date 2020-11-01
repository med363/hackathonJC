const express = require("express");
const assert = require("assert");
const bodyParser  = require('body-parser');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 5001


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//database configuration
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/Municipalite",{useUnifiedTopology: true},(err, client)  => {
  
  if (err) return console.error(err)
  console.log('Connected to Database')
  const db = client.db('Municipalité')
  const employeesCollection = db.collection('employees')
  app.post('/voyage', (req, res) => {
    employeesCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
        res.send(result)
      })
      .catch(error => console.error(error))
  })
  app.get('/voyage', (req, res) => {
    db.collection('employees').find().toArray()
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(error => console.error(error))
  })
})

