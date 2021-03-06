import { IImageConstructor } from "../interfaces/image.interface";

export class Cloudy extends Phaser.GameObjects.Image {
   body: Phaser.Physics.Arcade.Body;

   // variables
   private isDead: boolean;
   private isJumping: boolean;
   private currentScene: Phaser.Scene;
   private acceleration: number;
   private jumpAcceleration: number;
   private meow: Phaser.Sound.BaseSound
   
   // input
   private keys: Map<string, Phaser.Input.Keyboard.Key>;

   public getKeys(): Map<string, Phaser.Input.Keyboard.Key> {
      return this.keys;
   }
   
   
   public getDead(): boolean {
      return this.isDead;
   }

   public setDead(dead: boolean): void {
      this.isDead = dead;
   }
   
   constructor(aParams: IImageConstructor){
      super(aParams.scene, aParams.x, aParams.y, aParams.texture, aParams.frame);

      // image
      this.setScale(.1);
      this.setOrigin(0, 0);

      //variables
      this.isDead = false;

      //physics
      this.scene.physics.world.enable(this);
      this.body.setSize(5, 7);
      this.body.maxVelocity.x = 200;
      this.body.maxVelocity.y = 300;


      this.currentScene = aParams.scene;
      this.initSprite();
      this.currentScene.add.existing(this);

      this.meow = this.scene.sound.add('meow')

   }

   private initSprite() {
      this.isJumping = false;
      this.acceleration = 360;
      this.jumpAcceleration = -360;

      // input
      this.keys = new Map([
         ['LEFT', this.addKey('LEFT')],
         ['RIGHT', this.addKey('RIGHT')],
         ['JUMP', this.addKey('SPACE')],
         ['JUMP', this.addKey('UP')],
         ['MEOW', this.addKey('M')],
         ['SCRATCH', this.addKey('S')]
      ])
   }

   private addKey(key: string): Phaser.Input.Keyboard.Key {
      return this.currentScene.input.keyboard.addKey(key);
   }

   update(): void {
      this.handleInput();
   }

   private handleInput() {

      if(this.isDead) {
         this.currentScene.scene.stop("GameScene");
         this.currentScene.scene.start("MainMenuScene");
      }      

      // handle horizontal movement
      if (this.keys.get('RIGHT').isDown) {
         this.body.setAccelerationX(this.acceleration);
      } else if (this.keys.get('LEFT').isDown) {
         this.body.setAccelerationX(-this.acceleration);
      } else {
         this.body.setVelocityX(0);
         this.body.setAccelerationX(0);
      }

      if(this.body.onFloor()){
         this.isJumping = false;
      }

      // Handle Jumping
      if(this.keys.get('JUMP').isDown && !this.isJumping){
         this.body.setVelocityY(this.jumpAcceleration);
         this.isJumping = true;
      }

      // Handle Audio
      if(this.keys.get('MEOW').isDown){
         this.meow.play();
      }

      // Handle Scratch Attack
      if(this.keys.get('SCRATCH').isDown){
         console.log('SCRATCH ')
      }
      
      // handle dying by fall
      if(this.y > this.currentScene.sys.canvas.height){
         this.isDead = true
      }
   }
}
