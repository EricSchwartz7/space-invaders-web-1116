class CrewMember {
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  chargePhasers(){
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Gunner') {
      return 'had no effect'
    } else if (this.position === 'Gunner') {
      this.currentShip.phasersCharge = 'charged!'
    }
  }

  engageWarpDrive(){
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Pilot') {
      return 'had no effect'
    } else if (this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged!'
    }
  }

  setsInvisibility(){
    if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender') {
      return 'had no effect'
    } else if (this.position === 'Defender') {
      this.currentShip.cloaked = true
    }
  }


}
