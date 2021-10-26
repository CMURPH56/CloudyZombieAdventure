import { Cloudy } from '../objects/cloudy'
import { Platform } from '../objects/platform'

export class GameScene extends Phaser.Scene {
  private map: Phaser.Tilemaps.Tilemap;
  private tileset: Phaser.Tilemaps.Tileset;
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


    // create our tilemap from Tiled JSON
    this.map = this.make.tilemap({key: 'level1'});


    this.backgroundLayer = this.map.createLayer(
      'backgroundLayer',
      this.tileset,
      0,
      0
    );

    this.foregroundLayer = this.map.createLayer(
      'foregroundLayer',
      this.tileset,
      0,
      0
    )

    this.platforms = this.add.group({
      runChildUpdate: true
    })
    // Game Objects

    this.loadObjectsFromMap();
    
    this.cloudy = new Cloudy({
      scene: this,
      x: 50,
      y: 100,
      texture: ""
    });
    
    // Colliders
    this.physics.add.collider(this.cloudy, this.platforms);

  }

  public update() {
    this.cloudy.update();
  }

  private loadObjectsFromMap(): void {
    // get the object layer in the tilemap named 'objects'
    const objects = this.map.getObjectLayer('objects').objects as any[];

    objects.forEach((object) => {
      if( object.type == "platform"){
        this.platforms.add(
          new Platform( {
            scene: this,
            x: object.x,
            y: object.y,
            texture: 'platform',
            height: object.height,
            width: object.width
          })
        )
      }
    })
  }
}
