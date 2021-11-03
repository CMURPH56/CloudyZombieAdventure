import * as Phaser from 'phaser';
import {BootScene} from './scenes/boot-scene';
import { GameScene } from './scenes/game-scene';
import { VictoryScene } from './scenes/victory-scene';
import { MainMenuScene } from './scenes/main-menu-scene';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Cloudy Adventure Game',
  scene: [ BootScene, MainMenuScene, GameScene, VictoryScene],

  type: Phaser.AUTO,

  scale: {
    width: 1200,
    height: 800
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 475 },
      debug: true,
    },
  },
  parent: 'game',
  render: {pixelArt: true, antialias: false}
};

export const game = new Phaser.Game(gameConfig);
