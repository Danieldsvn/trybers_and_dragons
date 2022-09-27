import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static instances = 0;  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity); 
    this._maxLifePoints = 80;
    Dwarf.instances += 1;
  }  
  
  static createdRacesInstances(): number {    
    return Dwarf.instances;
  }  

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}