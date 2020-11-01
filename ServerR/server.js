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
  const ChauffeurCollection = db.collection('voyage')
  const CytoyenCollection = db.collection('contacts1')
  const QuestionCollection = db.collection('question')
  app.post('/voyage', (req, res) => {
    ChauffeurCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
        res.send(result)
      })
      .catch(error => console.error(error))
  })
  app.get('/voyage', (req, res) => {
    db.collection('voyage').find().toArray()
      .then(result => {
        console.log(result)
        res.json(result)
      })
      .catch(error => console.error(error))
  })


app.post('/contacts1', (req, res) => {
  CytoyenCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(error => console.error(error))
})
app.get('/contacts1', (req, res) => {
  db.collection('contacts1').find().toArray()
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(error => console.error(error))
})


app.post('/question', (req, res) => {
  QuestionCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(error => console.error(error))
})
app.get('/question', (req, res) => {
  db.collection('question').find().toArray()
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(error => console.error(error))
})
})

