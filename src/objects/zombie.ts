import { ISpriteConstructor } from '../interfaces/sprite.interface'

export class Zombie extends Phaser.GameObjects.Sprite {
  body: Phaser.Physics.Arcade.Body;

  // variables
  protected currentScene: Phaser.Scene;
  protected isActivated: boolean;
  protected isDying: boolean;
  protected speed: number;
  protected dyingScoreValue: number;


  


}
