export interface IPlatformConstructor {
  scene: Phaser.Scene;
  x: number;
  y: number;
  texture: string;
  frame?: string | number;
  height?: number;
  width?: number;
}
