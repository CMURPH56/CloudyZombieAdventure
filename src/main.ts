import * as Phaser from 'phaser';
import { GameScene } from './gameScene';


const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Cloudy Adventure Game',
  scene: GameScene,

  type: Phaser.AUTO,

  scale: {
    width: window.innerWidth,
    height: window.innerHeight
  },

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  parent: 'game',
  backgroundColor: '#000000',
};

export const game = new Phaser.Game(gameConfig);
