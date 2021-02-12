import "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }
  
  preload() {
    // add logo image
    this.add.image(300, 300, "logo").setScale(0.5);

    this.load.image("blueButton1", "assets/ui/blue_button02.png");
    this.load.image("blueButton2", "assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "assets/skater.png");
    this.load.image("box", "assets/ui/grey_box.png");
    this.load.image("checkedBox", "assets/ui/blue_boxCheckmark.png");
    this.load.audio("bgMusic", ["assets/TownTheme.mp3"]);
  }


  create() {

    this.scene.start("Title");
  }
}
