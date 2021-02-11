export class TestScene extends Phaser.Scene {
  create() {
    this.add.text(100, 100, "Hello, I'm working!", { fill: "#0f0" });
  }
}