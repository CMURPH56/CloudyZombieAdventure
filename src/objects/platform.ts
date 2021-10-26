import { IPlatformConstructor } from "../interfaces/platform.interface";

export class Platform extends Phaser.GameObjects.Image {

  body: Phaser.Physics.Arcade.Body;

  private currentScene: Phaser.Scene;

  constructor(aParams: IPlatformConstructor){
    super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame, aParams.height, aParams.width);

    // variables
    this.currentScene = aParams.scene;

    this.initImage(aParams.height, aParams.width);
    this.currentScene.add.existing(this);
  }

  private initImage(height: number, width: number): void {
    // image
    this.setOrigin(0, 0);
    this.setFrame(0);

    // physics
    this.currentScene.physics.world.enable(this);
    this.body.setSize( width, height);
    this.body.setAllowGravity(false);
    this.body.setImmovable(true);
  }

}
