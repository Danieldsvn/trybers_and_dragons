import Race from './Race';

export default class Elf extends Race {   
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);  
    this.maxLifePoints = 99;  
  }  

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }  

  set maxLifePoints(lifePoints) {
    this.maxLifePoints = lifePoints;
  }
}