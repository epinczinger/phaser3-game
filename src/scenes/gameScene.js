import "phaser";
import gameOptions from "../config/gameOptions";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
    this.gameOver = false;
  }

  preload() {}
  create() {
    this.background = this.add.tileSprite(
      400,
      300,
      game.width / 2,
      50,
      "background"
    );
    this.ground = this.add
      .tileSprite(400, 550, game.width / 2, 50, "ground")
      .setScale(1.75);
    this.ground = this.physics.add.existing(this.ground, true);
    let beer = this.add.image(350, 450, "beer").setScale(1);

    this.player = this.playerSetup();
    this.police = this.physics.add.image(200, 400, "police").setScale(1.5);

    this.police.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.police, this.ground);

    this.cursors = this.input.keyboard.createCursorKeys();

    // this.add.image(200, 200, "rock");

    this.physics.add.overlap(this.player, beer, this.collectBeer, null, this);
  }
  
  collectBeer(beer) {
    beer.disableBody(true, true);
  }

  moveBackground() {
    this.background.tilePositionX += gameOptions.backgroundSpeed;
    this.ground.tilePositionX += gameOptions.groundSpeed;
  }

  playerSetup() {
    const player = this.physics.add.sprite(300, 100, "skategirl").setScale(1.5);

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("skategirl", {
        start: 1,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("skategirl", {
        start: 5,
        end: 10,
      }),
      frameRate: 6,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("skategirl", {
        start: 5,
        end: 9,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "jumping",
      frames: this.anims.generateFrameNumbers("skategirl", {
        start: 1,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    return player;
  }

  update() {
    this.moveBackground();

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-gameOptions.jumpForce);
      this.player.anims.play("jumping", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play("right", true);
    } else if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.player.body.touching.down) {
      this.player.setVelocityX(0);
      this.player.anims.play("run", true);
    }
  }
}
