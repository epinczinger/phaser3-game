import "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {

    this.load.image("logo", "assets/skater.png");
    this.load.image("police", "assets/police.png");
    this.load.image("rock", "assets/rock-obstacle.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
