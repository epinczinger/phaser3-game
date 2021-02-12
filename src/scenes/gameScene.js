import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {}

  create() {
    this.add.image(400, 300, "background");
    this.add.image(400, 565, "ground").setScale(1.15);
    this.add.text(100, 100, "Hello, I'm working!", { fill: "#0f0" });
    this.add.image(100, 200, "skategirl").setScale(0.1);
    this.add.image(200, 400, "police").setScale(1.4);
        this.add.image(100, 500, "beer").setScale(1);


    this.add.image(200, 200, "rock");
  }
}
