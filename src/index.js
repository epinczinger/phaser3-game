import "phaser";
import Model from "./model";
import config from "./config/config";
import GameScene from "./scenes/gameScene";
import BootScene from "./scenes/bootScene";
import PreloaderScene from "./scenes/preloaderScene";
import TitleScene from "./scenes/titleScene";
import OptionsScene from "./scenes/optionsScene";
import CreditsScene from "./scenes/creditsScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model };
    this.scene.add("Boot", BootScene);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Title", TitleScene);
    this.scene.add("Options", OptionsScene);
    this.scene.add("Credits", CreditsScene);
    this.scene.add("Game", GameScene);
    this.scene.start("Boot");
  }
}

window.onload = function () {
  window.game = new Game();
}