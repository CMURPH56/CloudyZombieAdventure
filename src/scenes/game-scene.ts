import { Cloudy } from '../objects/cloudy'
import { Platform } from '../objects/platform'

export class GameScene extends Phaser.Scene {
  private cloudy: Cloudy;
  private platform: Platform
  private platforms: Phaser.GameObjects.Group;

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

    this.platform = new Platform({
        scene: this,
        x:  50,
        y: 500,
        texture: 'Platform'
    })
    this.platforms = this.add.group({
      runChildUpdate: true
    })
    // Colliders
    this.physics.add.collider(this.cloudy, this.platform);
  }

  public update() {
    this.cloudy.update();
  }
}
