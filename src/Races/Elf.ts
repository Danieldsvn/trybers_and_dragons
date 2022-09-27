import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static instances = 0;  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity); 
    this._maxLifePoints = 99;
    Elf.instances += 1;
  }  
  
  static createdRacesInstances(): number {    
    return Elf.instances;
  }  

  get maxLifePoints(): number {
    return this._maxLifePoints;
  } 
}