import "phaser";

import { TestScene } from "./scenes/testScene";

const gameConfig = {
  width: 680,
  height: 400,
  scene: TestScene,
};

new Phaser.Game(gameConfig);
