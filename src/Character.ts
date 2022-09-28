import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;
  constructor(name: string) {    
    const randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
    this._name = name;    
    this._dexterity = randomNumber;    
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber;
    this._defense = randomNumber;
    this._energy = { type_: this._archetype.energyType, amount: randomNumber };
  }
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy | undefined;
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
  
  get race(): Race {
    return this._race;
  }
}