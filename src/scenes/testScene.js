export class TestScene extends Phaser.Scene {
  preload() {
    this.load.image("skategirl", "assets/skater.png");
  }

  create() {
    this.add.text(100, 100, "Hello, I'm working!", { fill: "#0f0" });
    this.add.image(100, 200, "skategirl").setScale(0.1);
  }
}
