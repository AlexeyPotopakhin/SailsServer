/**
* Country.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  },

  data: [
    {
      "name": "Germany",
      "description": "Berlin is the capital of Germany",
      "hotels": [
        {
          "name": "Hotel Bavaria",
          "description": "Gollierstraße 9, 80339 München"
        },
        {
          "name": "Marc Munchen",
          "description": "Senefelderstrasse 12 | 80336 München, 80336 Munich, Bavaria, Germany"
        }
      ]
    },
    {
      "name": "Great Britain",
      "description": "London is the capital of UK",
      "hotels": [
        {
          "name": "Thistle Marble Arch",
          "description": "Superbly situated, Thistle Marble Arch overlooks Oxford Street and Marble Arch"
        },
        {
          "name": "The Cumberland",
          "description": "This stylish 4-star hotel is in the West End, 100 metres from Marble Arch London Underground Station"
        },
        {
          "name": "Cafe Royal",
          "description": "Cafe Royal has reopened as a luxury 5 star hotel in the heart of central London"
        }
      ]
    }
  ]
};

