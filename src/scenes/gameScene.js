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
    this.beer = this.add.image(350, 450, "beer").setScale(1);   
    
    this.player = this.playerSetup();
    this.police = this.physics.add.image(200, 400, "police").setScale(1.5);
   
   this.physics.add.collider(this.player, this.ground);
   this.physics.add.collider(this.police, this.ground);
   this.physics.add.collider(this.player, this.platformGroup);
   this.physics.add.collider(this.police, this.platformGroup);

   this.physics.add.overlap(this.player, this.beer, this.collectBeer, null, this);
    this.platformGroup = this.add.group({
      // once a platform is removed, it's added to the pool
      removeCallback: function (platform) {
        platform.scene.platformPool.add(platform);
      },
    });
    

    // pool
    this.platformPool = this.add.group({
      // once a platform is removed from the pool, it's added to the active platforms group
      removeCallback: function (platform) {
        platform.scene.platformGroup.add(platform);
      },
    });
    this.addPlatform(game.config.width, game.config.width / 2);
    // // this.add.image(200, 200, "rock");
    // let beers = this.physics.add.group({
    //   key: "beer",
    //   repeat: 100,
    //   setXY: { x: 12, y: 0, stepX: 70 },
    // });
    // this.physics.add.collider(beers, this.ground);

    //   this.physics.add.overlap(this.player, beers, this.collectBeer, null, this);
    
    
   
    // this.police = this.physics.add.image(200, 400, "police").setScale(1.5);

    // this.police.setCollideWorldBounds(true);
   
    // this.physics.add.collider(this.police, this.ground);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  addPlatform(platformWidth, posX) {
    let platform;
    if (this.platformPool.getLength()) {
      platform = this.platformPool.getFirst();
      platform.x = posX;
      platform.active = true;
      platform.visible = true;
      this.platformPool.remove(platform);
    } else {
      platform = this.physics.add.sprite(
        posX,
        game.config.height * 0.1,
        "platform"
      );
      platform.body.allowGravity = false;
      platform.setImmovable(true);
      platform.setVelocityX(gameOptions.groundSpeed);
      this.platformGroup.add(platform);
    }
    platform.displayWidth = platformWidth;
    this.nextPlatformDistance = Phaser.Math.Between(
      gameOptions.spawnRange[0],
      gameOptions.spawnRange[1]
    );
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
    // recycling platforms
    let minDistance = game.config.width;
    this.platformGroup.getChildren().forEach(function (platform) {
      let platformDistance =
        game.config.width - platform.x - platform.displayWidth / 2;
      minDistance = Math.min(minDistance, platformDistance);
      if (platform.x < -platform.displayWidth / 2) {
        this.platformGroup.killAndHide(platform);
        this.platformGroup.remove(platform);
      }
    }, this);

    // adding new platforms
    if (minDistance > this.nextPlatformDistance) {
      var nextPlatformWidth = Phaser.Math.Between(
        gameOptions.platformSizeRange[0],
        gameOptions.platformSizeRange[1]
      );
      this.addPlatform(
        nextPlatformWidth,
        game.config.width + nextPlatformWidth / 2
      );
    }

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
