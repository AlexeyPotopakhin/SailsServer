/**
 * CountryController
 *
 * @description :: Server-side logic for managing Countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getCountriesList: getCountriesList,
  getHotelsInCountryList: getHotelsInCountryList,
  getHotelDescription: getHotelDescription,
  addCountry: addCountry,
  addHotelInCountry: addHotelInCountry,
  deleteHotel: deleteHotel,
  updateHotel: updateHotel,

  // blueprint API
  find: getCountriesList,
  add: addCountry
};

function getCountriesList(req, res) {
  var countriesList = [];
  Country.data.forEach(function(country) {
    countriesList.push(country.name);
  });
  return res.json(countriesList);
}

function getHotelsInCountryList(req, res) {
  var hotelsList = [];
  for(var country in Country.data) {
    if(Country.data[country].name == req.params.countryName) {
      for(var hotel in Country.data[country].hotels) {
        hotelsList.push(Country.data[country].hotels[hotel].name);
      }
      break;
    }
  }
  return res.json(hotelsList);
}

function getHotelDescription(req, res) {
  for(var country in Country.data) {
    for(var hotel in Country.data[country].hotels) {
      if(Country.data[country].hotels[hotel].name == req.params.hotelName) {
        return res.json(Country.data[country].hotels[hotel].description);
      }
    }
  }
  return res.send(404, "Hotel not found");
}

function addCountry(req, res) {
  var country = '{'
    + '"name":"' + req.param("name")
    + '", "description":"' + req.param("description")
    + '", "hotels":[]}';
  Country.data.push(JSON.parse(country));
  return res.send(200, "Success");
}

function addHotelInCountry(req, res) {
  for(var country in Hotel.data) {
    if(Country.data[country].name == req.params.countryName) {
      var hotel = '{'
        + '"name":"' + req.param("name")
        + '", "description":"' + req.param("description")
        + '"}';
      Country.data[country].hotels.push(JSON.parse(hotel));
      return res.send(200, "Success");
    }
  }
  return res.send(404, "Country not found");
}

function deleteHotel(req, res) {
  for(var country in Hotel.data) {
    for(var hotel in Hotel.data[country].hotels) {
      if(Country.data[country].hotels[hotel].name == req.params.hotelName) {
        Country.data[country].hotels.splice(hotel, 1);
        return res.send(200, "Success");
      }
    }
  }
  return res.send(404, "Hotel not found");
}

function updateHotel(req, res) {
  for(var country in Country.data) {
    for(var hotel in Country.data[country].hotels) {
      if(Country.data[country].hotels[hotel].name == req.params.hotelName) {
        Country.data[country].hotels[hotel].name = req.param("name");
        Country.data[country].hotels[hotel].description = req.param("description");
        return res.send(200, "Success");
      }
    }
  }
  return res.send(404, "Hotel not found");
}

