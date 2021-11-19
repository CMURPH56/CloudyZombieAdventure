export class VictoryScene extends Phaser.Scene {
  private playAgainKey: Phaser.Input.Keyboard.Key;
  private titleBitmapText: Phaser.GameObjects.BitmapText;
  private playBitmapText: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: 'VictoryScene'
    });
  }

  init(): void {

    console.log('victory scene is called')
    this.playAgainKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.playAgainKey.isDown = false;
  }

  create(): void {

    this.titleBitmapText = this.add.bitmapText(
      0,
      200,
      'font',
      'CONGRATS YOU GOT CLOUDY TO THE COUCH!!!', 
      30
    );

    this.titleBitmapText.x = this.getCenterXPositionOfBitmapText(
      this.titleBitmapText.width
    )

    this.playBitmapText = this.add.bitmapText(0, 300, 'font', 'S: PLAY', 25);

    this.playBitmapText.x = this.getCenterXPositionOfBitmapText(
      this.playBitmapText.width
    );

  }

  update(): void {
    if(this.playAgainKey.isDown) {
      this.scene.start('GameScene')
    }
  }

  private getCenterXPositionOfBitmapText(width: number): number{
    return this.sys.canvas.width / 2 - width / 2;
  }

}
