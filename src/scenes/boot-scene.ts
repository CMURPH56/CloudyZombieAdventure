export class BootScene extends Phaser.Scene {
  private loadingBar: Phaser.GameObjects.Graphics;
  private progressBar: Phaser.GameObjects.Graphics; 
  
  constructor() {
    super({
      key: 'BootScene'
    });
  }
  preload(): void {

    // set the background and create loading bar
    this.cameras.main.setBackgroundColor(0x98d687);
    this.createLoadingbar();

    // pass value to change the loading bar fill
    this.load.on(
      'progress',
      function (value: number){
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16
        );
      },
      this
    );

    // delete bar graphics, when loading complete
    this.load.on(
      'complete',
      function () {
        this.progressBar.destroy();
        this.loadingBar.destroy();
      },
      this
    );
    
    this.load.pack('preload', './assets/pack.json', 'preload')
  }
  
}

