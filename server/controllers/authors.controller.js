const Author = require("../models/authors.models");

module.exports.home = (req,res) => {
    Author.find()
    .then(req=>res.json(req))
    .catch(err=>console.log(res.json(err)))
}

module.exports.edit = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then((req)=>res.json(req))
    .catch((err)=>res.status(400).json(err))
}

module.exports.getOne = (req,res) => {
    console.log(req.params)
    Author.findById({_id:req.params.id})
    .then(req=>res.json(req))
    .catch((err)=>console.log(err))
}

module.exports.new = (req,res) => {
    Author.create(req.body)
    .then(newAuth=>res.json(newAuth))
    .catch(err=>res.status(400).json(err))
}

module.exports.delete = (req,res) => {
    Author.deleteOne({_id:req.params.id})
    .then(res=>console.log(res))
    .catch((err)=>console.log(err))
}