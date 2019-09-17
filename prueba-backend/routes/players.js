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

module.exports = router;
