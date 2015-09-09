function Spaceship(name, crewMembersArray, phasers, shields) {
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  if (crewMembersArray.length === 0) 
    { this.docked = true;}
  else 
    { this.docked = false; }
  this.phasersCharge = "uncharged";
  this.crew = crewMembersArray;
  this.shipStatus();
};


Spaceship.prototype.shipStatus = function() {
  this.crew.forEach(function(crewMember){
    crewMember.currentShip = this;
  }.bind(this));
}


