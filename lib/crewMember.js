function CrewMember(position){
  this.position = position;
  this.currentShip = 'Looking for a Rig';
  }

  CrewMember.prototype.engageWarpDrive = function() {
    return "had no effect";
  }
  CrewMember.prototype.setsInvisibility = function() {
    return 'had no effect';
  }
  CrewMember.prototype.chargePhasers = function() {
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig" ) {
      this.currentShip.phasersCharge = "charged!";
    } 
    else {
      return 'had no effect';
    }
  }

  CrewMember.prototype.engageWarpDrive = function() {
    if (this.position == 'Pilot' && this.currentShip !== "Looking for a Rig") {
      this.currentShip.warpDrive = "engaged!";
    } 
    else {
      return 'had no effect';
    }
  }

  CrewMember.prototype.setsInvisibility = function() {
    if (this.position == 'Defender' && this.currentShip.cloaked == false){
      this.currentShip.cloaked = true;
    } else {
      return 'had no effect';
    }
  }