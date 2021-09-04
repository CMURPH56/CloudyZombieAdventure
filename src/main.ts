import * as Phaser from 'phaser';
import {BootScene} from './scenes/boot-scene';
import { GameScene } from './scenes/game-scene';


const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Cloudy Adventure Game',
  scene: [ BootScene, GameScene],

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
};

export const game = new Phaser.Game(gameConfig);
