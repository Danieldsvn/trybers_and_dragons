import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private race: Race;
  private archetype: Archetype;
  private maxLifePoints: number;
  private lifePoints: number;
  private strength: number;
  private defense: number;
  private dexterity: number;
  private energy: Energy;
  private name: string;
  constructor(name: string) {    
    this.name = name;    
    this.dexterity = Math.floor(Math.random() * (11 - 1) + 1);    
    this.race = new Elf(name, this.dexterity);
    this.archetype = new Mage(name);
    this.maxLifePoints =
  }
  attack(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }
  special?(enemy: Fighter): void {
    throw new Error('Method not implemented.');
  }
  levelUp(): void {
    throw new Error('Method not implemented.');
  }
  receiveDamage(attackPoints: number): number {
    throw new Error('Method not implemented.');
  }
  
}