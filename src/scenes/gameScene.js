import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
    // this.player = undefined;
    this.gameOver = false;
  }

  preload() {}
  create() {
    this.background = this.add.tileSprite(400, 300, game.width / 2, 50, "background");
    this.ground = this.add
      .tileSprite(400, 550, game.width / 2, 50, "ground")
      .setScale(1.75);
    this.ground = this.physics.add.existing(this.ground, true);

    this.player = this.playerSetup();

    this.police = this.physics.add.image(200, 400, "police").setScale(1.5);

    this.police.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.police, this.ground);

    this.cursors = this.input.keyboard.createCursorKeys();

    // this.add.text(50, 50, "Have a good ride", { fill: "#0f0" });
    // this.add.image(300, 500, "beer").setScale(1);
    // this.add.image(200, 200, "rock");

 }

  moveBackground() {
    this.background.tilePositionX += 0.5;
    this.ground.tilePositionX += 1.5;
  }

  playerSetup() {
    const player = this.physics.add.sprite(300, 100, "skategirl").setScale(1.5);

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("skategirl", [1, 2, 7,3,8,9,4,5]),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("skategirl", [1,2,7]),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers('skategirl', { start: 5, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }

  update() {

    this.moveBackground();
    // if (this.gameOver) {
    //   return;
    // }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(10);

      this.player.anims.play("run");
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-430);
    }
  }
}
