var Animal = require("../models/animal");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    Animal.find({}, function (err, animals) {

      res.render('animals/index', { animals: animals });
    });
  })

router.post("/", function(req, res){
  Animal.create(req.body.animal, function (err, animal) {
    if(err){
      res.send("something wrong happened"+ err)
    }else{
      res.redirect('/');
    }

  });
})

router.get("/:id/adopt", function(req, res){
  Animal.findByIdAndUpdate(req.params.id, {status: "adopted"}, function(err, animal){
    res.redirect('/');
  })
});

router.get("/:id/abandon", function(req, res){
  Animal.findByIdAndUpdate(req.params.id, {status: "orphan"}, function(err, animal){
    res.redirect('/');
  })
});

module.exports = router;
