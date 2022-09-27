import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static instances = 0;  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity); 
    this._maxLifePoints = 74;
    Orc.instances += 1;
  }  
  
  static createdRacesInstances(): number {    
    return Orc.instances;
  }  

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}