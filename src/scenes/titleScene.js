import "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {
    this.load.image("skategirl", "assets/skater.png");
    this.load.image("background", "assets/background.png");
    this.load.image("ground", "assets/ground.png");
    this.load.image("asphalt", "assets/asphalts.png");
    this.load.image('beer','assets/beer.png' );
    this.load.image('police', 'assets/police.png');
  }

  create() {
    this.scene.start("Game");
  }
}
