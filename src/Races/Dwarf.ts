import Race from './Race';

export default class Dwarf extends Race {   
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);  
    this.maxLifePoints = 80;  
  }  

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }  

  set maxLifePoints(lifePoints) {
    this.maxLifePoints = lifePoints;
  }
}