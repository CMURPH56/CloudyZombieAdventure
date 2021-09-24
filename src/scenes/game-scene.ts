import { Cloudy } from '../objects/cloudy'
import { Platform } from '../objects/platform'

export class GameScene extends Phaser.Scene {
  private map: Phaser.Tilemaps.Tilemap;
  private tileSet: Phaser.Tilemaps.Tileset;
  private cloudy: Cloudy;
  private platform: Platform;
  private backgroundLayer: Phaser.Tilemaps.TilemapLayer;
  private foregroundLayer: Phaser.Tilemaps.TilemapLayer;
  private platforms: Phaser.GameObjects.Group;
  private meow: Phaser.Sound.BaseSound;

  constructor() {
    super({
      key: 'GameScene'
    });
  }


  preload(): void {

  }

  public create(): void {

    // SETUP TILE MAP
    
    // create our tilemap from Tiled JSON
    this.map = this.make.tilemap({key: this.registry.get('level')});


    // add our tileset and layers to our tilemap
    this.tileSet = this.map.addTilesetImage('tiles');

    // tile set is returning null
    console.log(this.tileSet);


    this.backgroundLayer= this.map.createLayer(
      'backgroundLayer',
      this.tileSet,
      0,
      0
    );

    this.foregroundLayer = this.map.createLayer(
      'foregroundLayer',
      this.tileSet,
      0,
      0
    );

    // I dont think these should be returning null
    // console.log(this.foregroundLayer);
    // console.log(this.backgroundLayer);
    // // this.foregroundLayer.setName('foregroundLayer');
    
    // // set collision for tiles with property collide set to true
    // this.foregroundLayer.setCollisionByProperty({ collide:true })

      
      this.cloudy = new Cloudy({
        scene: this,
        x: 50,
        y: 100,
        texture: 'bird'
      });

      this.platform = new Platform({
          scene: this,
          x:  50,
          y: 500,
          texture: 'Platform'
      })
      this.platforms = this.add.group({
        runChildUpdate: true
      })
      // Colliders
      this.physics.add.collider(this.cloudy, this.platform);
  }

  public update() {
    this.cloudy.update();
  }
}
