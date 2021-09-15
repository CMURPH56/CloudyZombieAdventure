import { Cloudy } from '../objects/cloudy'
import { Platform } from '../objects/platform'

export class GameScene extends Phaser.Scene {
  private cloudy: Cloudy;

  constructor() {
    super({
      key: 'GameScene'
    });
  }


  preload(): void {

  }

  public create(): void {
    
    
    this.cloudy = new Cloudy({
      scene: this,
      x: 50,
      y: 100,
      texture: 'bird'
    });
  }

  public update() {
    // TODO
  }
}
