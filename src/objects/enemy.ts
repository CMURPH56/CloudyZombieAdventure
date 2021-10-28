import { ISpriteConstructor } from '../interfaces/sprite.interface'

export class Enemy extends Phaser.GameObjects.Sprite {
  body: Phaser.Physics.Arcade.Body;

  // variables
  protected currentScene: Phaser.Scene;
  protected isActivated: boolean;
  protected isDying: boolean;
  protected speed: number;
  protected dyingScoreValue: number;

  constructor(aParams: ISpriteConstructor) {
    super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

    // variables
    this.currentScene = aParams.scene;
    this.initSprite();
    this.currentScene.add.existing(this);
  }

  protected initSprite() {

    // variable
    this.isActivated = false;
    this.isDying = false;
    
    // sprite
    this.setOrigin(0, 0);
    this.setFrame(0);

    // physics
    this.currentScene.physics.world.enable(this);
    this.body.setSize(8, 8);
  }

}
