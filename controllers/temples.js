const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async  (req, res) => {
 const result = await  mongodb.getDatabase().db().collection('temples').find()
    result.toArray().then((err, temples) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(temples);
    });
};
const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid temple id to find a temple.');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('temples').find({ _id: userId });
    result.toArray().then((err, temples) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(temples[0]);
    });
};
 const createTemple = async (req ,res) => {
  //#swagger.tags ['temples']
    const user = {
       templeName: req.body.templeName,
       country: req.body.country,
       dateDedication: req.body.dateDedication,
       phone: req.body.phone
       
    };
    const response = await mongodb.getDatabase().db().collection('temples').insertOne(user);
    if (response.acknowledged) {
        res.status(201).json(response);
    }
    else {
        res.status(500).json(response.console.error || 'Some error occurred while creating the temple');
    }
};

const updateTemple = async (req ,res) => {
  //#swagger.tags ['temples']
    const userId = new ObjectId(req.params.id);
    const user = {
       templeName: req.body.templeName,
       country: req.body.country,
       dateDedication: req.body.dateDedication,
       phone: req.body.phone,
       
    };
    const response = await mongodb.getDatabase().db().collection('temples').replaceOne({_id: userId} ,user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    }
    else {
        res.status(500).json(response.console.error || 'Some error occurred while updating the temple');
    }
};

const deleteTemple = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid Temple id to delete a Temple.');
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('temples').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the temple.');
  }
};


module.exports = {
    getAll,
    getSingle,
    createTemple,
    updateTemple,
    deleteTemple

};