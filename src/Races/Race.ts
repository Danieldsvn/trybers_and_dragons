export default abstract class Race {
  private name: string;
  private dexterity: number;  
  // private static instancesCreated = 0;
  private static createdRacesInstances(): number;
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  get RaceName(): string {
    return this.name;
  }

  get RaceDexterity(): number {
    return this.dexterity;
  }

  // createdRacesInstances
}