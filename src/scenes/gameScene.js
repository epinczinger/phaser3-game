import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    // load images
    this.load.image("logo", "assets/skater.png");
  }

  create() {
    this.add.image(400, 300, "logo").setScale(0.3);
  }
}
