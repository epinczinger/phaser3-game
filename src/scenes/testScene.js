export class TestScene extends Phaser.Scene {
  preload() {
    this.load.image("skategirl", "assets/skater.png");
    this.load.image("skatepush00", "assets/skaterpush00.png");
    this.load.image("skatepush01", "assets/skaterpush01.png");
    this.load.image("skatepush02", "assets/skaterpush02.png");
    this.load.image("skatepush03", "assets/skaterpush03.png");
    this.load.image("skatepush04", "assets/skaterpush04.png");
  }

  create() {
    this.add.text(100, 100, "Hello, I'm working!", { fill: "#0f0" });
    this.add.image(100, 200, "skategirl").setScale(0.1);
    this.add.image(200, 200, "skatepush00").setScale(0.1);
    this.add.image(300, 200, "skatepush01").setScale(0.1);
    this.add.image(400, 200, "skatepush02").setScale(0.1);
    this.add.image(500, 200, "skatepush03").setScale(0.1);
    this.add.image(600, 200, "skatepush04").setScale(0.1);
  }
}
