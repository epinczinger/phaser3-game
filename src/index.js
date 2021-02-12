import "phaser";
import config from "./config/config";
import GameScene from "./scenes/gameScene";
import BootScene from "./scenes/bootScene";
import PreloaderScene from "./scenes/preloaderScene";
import TitleScene from "./scenes/titleScene";
import OptionsScene from "./scenes/optionsScene";
import CreditsScene from "./scenes/creditsScene";
import { TestScene } from "./scenes/testScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Test-scene", TestScene);
    this.scene.add("Title", TitleScene);
    this.scene.add("Options", OptionsScene);
    this.scene.add("Credits", CreditsScene);
    this.scene.add("Game", GameScene);
    this.scene.start("Boot");
  }
}

window.game = new Game();