const https = require('https')
const request = require('request')
const fs = require('fs')

module.exports = class PlayerController {

  getPlayers(req, response) {
    request('https://www.balldontlie.io/api/v1/players', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.send(body)
    });
  }

  getPlayerByName(req, response) {
    if (req.params.name) {
      request(`https://www.balldontlie.io/api/v1/players?search=${req.params.name}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        response.send(body)
      });
    }
  }

  getPlayerById(req, response) {
    if (req.params.id) {
      request(`https://www.balldontlie.io/api/v1/players/${req.params.id}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        response.send(body)
      });
    }
  }

  setPlayer(req, response) {
    if (req.params.id) {
      req.body.id = req.params.id
      let myJson = []
      fs.readFile('./resources/players.json', (err, data) => {
        if (err) throw err;
        let update = null
        if (data != '') {
          myJson = JSON.parse(data)
          update = myJson.find(x => x.id == req.body.id)
          if (update) {
            update.firstname = req.body.firstname
            update.lastname = req.body.lastname
            update.position = req.body.position
            update.id = req.body.id
          } else {
            myJson.push(req.body)
          }
        } else {
          myJson.push(req.body)
        }

        if (myJson.length > 0) {
          fs.writeFile("./resources/players.json", JSON.stringify(myJson), function (err) {
            if (err) throw err;
            response.status(200).json({ message: 'Success' })
          });
        }
      });

    }
  }

}