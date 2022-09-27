import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private energy: EnergyType;
  static instances = 0;
  constructor(_name: string) {
    super(_name);
    this.energy = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.instances; 
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}