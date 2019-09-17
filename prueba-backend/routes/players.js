var express = require('express');
var router = express.Router();
var players = require('../controllers/player-controller')
// const https = require('https')

const playerController = new players()


router.get('/', (req, res) => {
  playerController.getPlayers(req, res)
});

router.get('/:name', (req, res) => {
  playerController.getPlayerByName(req, res)
});

router.get('/id/:id', (req, res) => {
  playerController.getPlayerById(req, res)
});

router.post('/:id', (req, res) => {
  playerController.setPlayer(req, res)
});


module.exports = router;
