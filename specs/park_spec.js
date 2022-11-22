const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  let fullPark;
  let species = 'triceratops'
  

  beforeEach(function () {
    park= new Park ("Dino World", 30);
    fullPark= new Park ("Dino Park", 30);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 20);
    fullPark.addDinosaur(dinosaur);
    fullPark.addDinosaur(dinosaur1);
    fullPark.addDinosaur(dinosaur2);

  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, "Dino World");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 30);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    fullPark.removeDinosaur(dinosaur1);
    const actual = fullPark.dinosaurCollection;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = fullPark.dinosaurMostVisitors();
    assert.deepStrictEqual(actual, [dinosaur])
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = fullPark.dinosaurSpecies(species)
    assert.deepStrictEqual(actual, [dinosaur1])
  });


  it('should be able to calculate the total number of visitors per day', function(){
    const actual = fullPark.calculateTotalVisitors()
    assert.deepStrictEqual(actual, 100)
  });


  it('should be able to calculate the total number of visitors per year', function(){
    const actual = fullPark.calculateTotalYearlyVisitors();
    assert.deepStrictEqual(actual, 36500);
  });


  it('should be able to calculate total revenue for one year', function(){
    const actual = fullPark.calculateYearlyRevenue();
    assert.deepStrictEqual(actual, 1095000)

  });
   

});
