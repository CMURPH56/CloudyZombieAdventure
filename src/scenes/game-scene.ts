import { Cloudy } from '../objects/cloudy'

export class GameScene extends Phaser.Scene {
  private background: Phaser.GameObjects.TileSprite;
  constructor() {
    super({
      key: 'GameScene'
    });
  }

  public create() {
    this.background = this.add
      .tileSprite(0, 0, 390, 600, 'background')
      .setOrigin(0, 0)
  }

  public update() {
    // TODO
  }
}
