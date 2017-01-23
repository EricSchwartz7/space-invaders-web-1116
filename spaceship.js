class Spaceship {
  constructor(name, crewMembers, phasers, shields) {
    this.name = name
    this.crewMembers = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.warpDrive = 'disengaged'
    this.phasersCharge = 'uncharged'
    this.cloaked = false
    if (this.crewMembers.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }
    this.assignShips()
  }

  assignShips() {
    for (var i = 0; i < this.crewMembers.length; i++){
      this.crewMembers[i].currentShip = this
    }
  }

}
