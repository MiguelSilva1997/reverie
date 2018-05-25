var express = require('express');
var router = express.Router();

const Robots = require('../models/robots')
pry = require('pryjs')
/* GET home page. */
router.get('/', function(req, res, next) {
  Robots.getRobots()
    .then((robots) => {
      res.json(robots)
    });
});


router.patch('/:id', function(req, res, next) {
  Robots.update(req.body, req.params.id)
  return res.status(201).send("Successfully updated robot")
})

router.get('/:id', function(req, res, next) {
  let robotId = req.params.id
  Robots.getRobot(robotId)
  .then((robot) => {
    res.json(robot)
  });
});

router.post('/', (req, res) => {
    Robots.addRobot(req.body)
    .then((data)=>{
      if (data.rowCount === 0) {
        return res.sendStatus(404)
      }
      res.status(201).send("Successfully added robot")
    })
})


router.delete('/:id', (req, res) => {
  const robotId = req.params.id
  Robots.deleteFood(robotId)
  .then((data)=>{
    res.status(201).send("Successfully Deleted Food From Meal")
  })
})

module.exports = router;
