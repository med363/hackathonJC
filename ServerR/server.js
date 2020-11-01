const express = require("express");
const assert = require("assert");
const bodyParser  = require('body-parser');
const { MongoClient, ObjectID } = require("mongodb");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const Mongo_url = "mongodb://localhost:27017";
const dbName = "Municipalite-api";
// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



MongoClient.connect(Mongo_url, { useUnifiedTopology: true }, (err, client) => {
  assert.equal(err, null, "DATA FAILED");
  const db = client.db(dbName);
  console.log("db is connected");
  

  ///contact collection
  app.post("/contacts1", (req, res) => {
    const new_elem = req.body;
    db.collection("contacts&problems").insertOne(new_elem, (err, data) => {
      if (err) {
        res.status(400).json({ error: "Error contact not inserted" });
      } else {
        res.json({ success: data.insertedId });
      }
    });
  });
  app.get("/contacts1", (req, res) => {
    //  let  header=ObjectID(req.params.id)
    db.collection("contacts&problems")
      .find()
      .toArray((err, data) => {
        if (err) res.send("not found");
        else res.send(data);
      });
  });
});
//affichINFO collection
app.post("/voyage", (req, res) => {
  const new_elem = req.body;
  db.collection("voyage").insertOne(new_elem, (err, data) => {
    if (err) {
      res.status(400).json({ error: "Error voyage not inserted" });
    } else {
      res.json({ success: data.insertedId });
    }
  });
});
app.get("/voyage", (req, res) => {
  //  let  header=ObjectID(req.params.id)
  db.collection("voyage")
    .find()
    .toArray((err, data) => {
      if (err) res.send("not found");
      else res.send(data);
    });
});
//poseQUESTION COLLECTION
app.post("/question", (req, res) => {
  const new_elem = req.body;
  db.collection("question").insertOne(new_elem, (err, data) => {
    if (err) {
      res.status(400).json({ error: "Error question not inserted" });
    } else {
      res.json({ success: data.insertedId });
    }
  });
});
app.get("/question", (req, res) => {
  //  let  header=ObjectID(req.params.id)
  db.collection("question")
    .find()
    .toArray((err, data) => {
      if (err) res.send("not found");
      else res.send(data);
    });
});
app.listen(5001, (err) => {
  if (err) console.log("errr");
  else console.log("server run on 5001");
});
