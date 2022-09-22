import Race from './Race';

export default class Orc extends Race {   
  constructor() {
    super();    
  }

  get maxLifePoints(): number {
    return this.maxLifePoints;
  }  
}