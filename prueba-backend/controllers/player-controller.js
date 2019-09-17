const https = require('https')
const request = require('request')

module.exports = class PlayerController {

  getPlayers(req, response) {
    request('https://www.balldontlie.io/api/v1/players', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.send(body)
    });
  }

}