const jazzyModel = require('../model/jazzyModel');

const jazzy_burger_create = (req,res)=>{
    console.log(req.body);
    const savedJazzyBurger = new jazzyModel(req.body)
    savedJazzyBurger.save()
    .then((result)=>res.status(200).json(result))
    .catch((err)=>res.status(404).json('bad request'))

}
const jazzy_burger_all = (req,res)=>{
    jazzyModel.find()
    .then((result)=> res.status(200).json(result))
    .catch((err)=> res.status(404).json('bad request'))

}

module.exports = {
    jazzy_burger_create,
    jazzy_burger_all
}