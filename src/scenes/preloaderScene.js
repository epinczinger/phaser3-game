import "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.load.spritesheet('skategirl', 
			'assets/skater.png',
			{ frameWidth: 40, frameHeight: 56 });
    this.load.image("background", "assets/background.png");
    this.load.image("ground", "assets/ground.png");
    this.load.image("asphalt", "assets/asphalts.png");
    this.load.image("beer", "assets/beer.png");
    this.load.image("police", "assets/police.png");
    this.load.image("rock", "assets/rock-obstacle.png");
    this.load.image("blueButton1", "assets/ui/blue_button02.png");
    this.load.image("blueButton2", "assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "assets/skater.png");
    this.load.image("box", "assets/ui/grey_box.png");
    this.load.image("checkedBox", "assets/ui/blue_boxCheckmark.png");
    this.load.audio("bgMusic", ["assets/TownTheme.mp3"]);
  }

  create() {
    this.add.image(300, 300, "logo").setScale(0.5);
    this.scene.start("Title");
  }
}
