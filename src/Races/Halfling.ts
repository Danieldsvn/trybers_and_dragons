import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static instances = 0;  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity); 
    this._maxLifePoints = 60;
    Halfling.instances += 1;
  }  
  
  static createdRacesInstances(): number {    
    return Halfling.instances;
  }  

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}