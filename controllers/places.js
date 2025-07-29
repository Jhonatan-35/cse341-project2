const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async  (req, res) => {
 const result = await  mongodb.getDatabase().db().collection('places').find()
    result.toArray().then((err, places) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(places);
    });
};
const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid place id to find a place.');
  }
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDatabase().db().collection('places').find({ _id: userId });
    result.toArray().then((err, places) => {
      if (err) {
        res.status(400).json({ message: err });
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(places[0]);
    });
};
 const createPlace = async (req ,res) => {
  //#swagger.tags ['Places']
    const user = {
       namePlace: req.body.namePlace,
       altitude: req.body.altitude,
       email: req.body.email,
       phone: req.body.phone,
       sport: req.body.sport
       
    };
    const response = await mongodb.getDatabase().db().collection('places').insertOne(user);
    if (response.acknowledged) {
        res.status(400).json(response);
    }
    else {
        res.status(500).json(response.console.error || 'Some error occurred while creating the place');
    }
};

const updatePlace = async (req ,res) => {
  //#swagger.tags ['places']
    const userId = new ObjectId(req.params.id);
    const user = {
       namePlace: req.body.namePlace,
       altitude: req.body.altitude,
       email: req.body.email,
       phone: req.body.phone,
       sport: req.body.sport,
       
    };
    const response = await mongodb.getDatabase().db().collection('places').replaceOne({_id: userId} ,user);
    if (response.modifiedCount > 0) {
        res.status(400).send();
    }
    else {
        res.status(500).json(response.console.error || 'Some error occurred while updating the place');
    }
};

const deletePlace = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid place id to delete a place.');
  }
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('places').deleteOne({ _id: userId });
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the place.');
  }
};


module.exports = {
    getAll,
    getSingle,
    createPlace,
    updatePlace,
    deletePlace

};