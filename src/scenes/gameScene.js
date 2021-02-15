import "phaser";

export default class GameScene extends Phaser.Scene {
  
  constructor() {
    super("Game");
  }

  preload() {}
  create() {
   
   this.add.image(400, 300, "background");
    let platforms;
    let player;
    let police;

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 550, "ground").setScale(1.8);
    

    player = this.physics.add.image(300, 100, "skategirl").setScale(0.1);
    police = this.physics.add.image(200, 400, 'police').setScale(1.5); 

    player.setBounce(0.1);
    player.setCollideWorldBounds(true);
    police.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);
    this.physics.add.collider(police, platforms);

    
    
    this.add.text(50, 50, "Have a good ride", { fill: "#0f0" });
    this.add.image(300, 500, "beer").setScale(1);
    this.add.image(200, 200, "rock");
  }

  
}


