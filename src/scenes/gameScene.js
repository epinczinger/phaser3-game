import "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
    // this.player = undefined;
    this.gameOver = false;
  }

  preload() {}
  create() {
    const player = this.playerSetup();
    this.background = this.add.tileSprite(400, 300, game.width / 2, 50, "background");

    this.ground = this.add
      .tileSprite(400, 550, game.width / 2, 50, "ground")
      .setScale(1.75);

    let ground;
    let police;

    // this.ground = this.physics.add.staticGroup();


    police = this.physics.add.image(200, 400, "police").setScale(1.5);

    police.setCollideWorldBounds(true);

    this.physics.add.collider(player, this.ground);
    this.physics.add.collider(police, this.ground);

    this.add.text(50, 50, "Have a good ride", { fill: "#0f0" });
    this.add.image(300, 500, "beer").setScale(1);
    this.add.image(200, 200, "rock");
  }

  moveBackground() {
    this.background.tilePositionX += 0.5;
    this.ground.tilePositionX += 1.5;
  }

  playerSetup() {
    const player = this.physics.add.sprite(300, 100, "skategirl");

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);

    return player;
  }

  update() {
    
    this.moveBackground();
    // if (this.gameOver) {
    //   return;
    // }
  }
}
