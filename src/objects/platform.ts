import { IPlatformConstructor } from "../interfaces/platform.interface";

export class Platform extends Phaser.GameObjects.Image {

  body: Phaser.Physics.Arcade.Body;

  private currentScene: Phaser.Scene;

  constructor(aParams: IPlatformConstructor){
    super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

    // variables
    this.currentScene = aParams.scene;

    this.initImage();
    this.currentScene.add.existing(this);
  }

  private initImage(): void {
    // image
    this.setOrigin(0, 0);
    this.setFrame(0);

    // physics
    this.currentScene.physics.world.enable(this);
    this.body.setSize(1000, 5);
    this.body.setAllowGravity(false);
    this.body.setImmovable(true);
  }

}
