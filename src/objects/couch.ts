import { IImageConstructor } from "../interfaces/image.interface"

export class Couch extends Phaser.GameObjects.Image {
  body: Phaser.Physics.Arcade.Body;

  private currentScene: Phaser.Scene;


  // variables

  constructor(aParams: IImageConstructor) {
    super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

    // image
    this.setScale(5);
    this.setOrigin(0, 0);

    this.scene.physics.world.enable(this);
    this.body.setSize(5, 7);

    this.currentScene = aParams.scene;

    this.currentScene.add.existing(this);
  }
}
