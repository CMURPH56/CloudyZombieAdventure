import { IImageConstructor } from "../interfaces/image.interface";

export class Cloudy extends Phaser.GameObjects.Image {
   body: Phaser.Physics.Arcade.Body;

   private isDead: boolean;

   public getDead(): boolean {
      return this.isDead;
   }

   public setDead(dead: boolean): void {
      this.isDead = dead;
   }
   
   constructor(aParams: IImageConstructor){
      super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

      // image
      this.setScale(3);
      this.setOrigin(0, 0);

      //variables
      this.isDead = false;

      //physics
      this.scene.physics.world.enable(this);
      this.body.setGravityY(1000);
      this.body.setSize(17, 12);

   }
}
