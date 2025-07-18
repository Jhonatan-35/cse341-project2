const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {

    const result = await mongodb.getDatabase().db().collection('temples').find();
    result.toArray().then((temples) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(temples);
    });
};

const getSingle = async (req ,res) => {
  //#swagger.tags ['contacts']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('temples').find({_id: userId});
    result.toArray().then((temples) => {
       res.setHeader('Content-Type', 'application/json');
       res.status(200).json(temples[0]);
    });
};





module.exports = {
    getAll,
    getSingle,
   

};