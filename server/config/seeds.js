'use strict';

var mongoose = require('mongoose'),
  Faker = require('faker'),
  Portfolio = mongoose.model('Portfolio'),
  Lease = mongoose.model('Lease'),
  Building = mongoose.model('Building');

/**
 * Utility functions
 */

function randomBoolean(){
  return Faker.helpers.randomNumber() % 2 > 0 ? true : false;
}
/**
 * Populate database with sample application data
 */

function createPortfolios(qty){
  var portfolios = [];
  var newPortfolio = function(){
    return new Portfolio({
      name:     Faker.company.companyName(),
      info:     Faker.company.catchPhrase(),
      summary:  Faker.company.catchPhraseDescriptor(),
      image:    Faker.image.imageUrl()
    });
  };
  for(var i = 0; i < qty; i++){
    portfolios.push(newPortfolio());
  }
  return portfolios;
}

function Address(){
  var address = {};
  address.address1 = Faker.address.streetAddress();
  address.city =     Faker.address.city();
  address.country =  Faker.address.country();
  return address;
}

function createBuildings(qty){
  var buildings = [];
  var newBuilding = function(){
    return new Building({
      name:     							Faker.name.firstName(),
      address:                new Address(),
      info: {
        construction_year: Faker.random.number(),
        control: {
          full:      randomBoolean(),
          shared:    randomBoolean()
        },
        user:{
          own_use:      randomBoolean(),
          rented:       randomBoolean()
        },
        area_total:        Faker.helpers.randomNumber(),
        area_usefull:      Faker.helpers.randomNumber(),
        floors:            Faker.helpers.randomNumber(),
        parking_spaces:    Faker.helpers.randomNumber(),
        parking_surface:   Faker.helpers.randomNumber(),
      }
    });
  };
  for(var i = 0; i < qty; i++){
    buildings.push(newBuilding());
  }
  return buildings;
}


var Portfolios = createPortfolios(3);
Portfolios.forEach(function(portfolio){
  var buildings = createBuildings(3);
  buildings.forEach(function(building){
    building.portfolio = portfolio._id;
    portfolio.buildings.push(building._id);
    building.save();
  });
  portfolio.save();
});
