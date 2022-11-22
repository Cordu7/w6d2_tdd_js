const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice= ticketPrice;
    this. dinosaurCollection= [];
   
  }

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
  };

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaurs = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(indexOfDinosaurs, 1);
  }

Park.prototype.dinosaurMostVisitors = function () {
    const mostVisited = [];
    const sortedCollection = [];
    this.dinosaurCollection.sort((a, b) => b.guestsAttractedPerDay - a.guestsAttractedPerDay);
    this.dinosaurCollection.forEach((e) => {
        sortedCollection.push(e)
    });
    mostVisited.push(sortedCollection[0]);
    return mostVisited;
};

Park.prototype.dinosaurSpecies = function (species) {
    const dinosaurSpecies = [];
    for (const dino of this.dinosaurCollection){
        if (species === dino.species) {
            dinosaurSpecies.push(dino);
        };
    };
    
    return dinosaurSpecies;
};

Park.prototype.calculateTotalVisitors = function () {
    let totalVisitors= 0;
    for (const dino of this.dinosaurCollection){
        totalVisitors += dino.guestsAttractedPerDay
        };
    return totalVisitors;
};

Park.prototype.calculateTotalYearlyVisitors = function () {
    let totalYearlyVisitors= this.calculateTotalVisitors()*365
    return totalYearlyVisitors;
};

Park.prototype.calculateYearlyRevenue= function () {
    let YearlyRevenue= this.calculateTotalYearlyVisitors()*30
    
    return YearlyRevenue;
};








 
module.exports = Park;
