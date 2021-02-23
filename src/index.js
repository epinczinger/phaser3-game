import Phaser from "phaser";
import Model from "./model";
import config from "./config/config";
import GameScene from "./scenes/gameScene";
import BootScene from "./scenes/bootScene";
import PreloaderScene from "./scenes/preloaderScene";
import TitleScene from "./scenes/titleScene";
import OptionsScene from "./scenes/optionsScene";
import CreditsScene from "./scenes/creditsScene";
import LeaderboardScene from "./scenes/leaderboardScene";
import helpers from "./helpers";

if (localStorage.getItem("username")) {
  document.getElementById("hide-unless-username").remove();
  class Game extends Phaser.Game {
    constructor() {
      super(config);
      const model = new Model();
      this.globals = { model, bgMusic: null };
      this.scene.add("Boot", BootScene);
      this.scene.add("Preloader", PreloaderScene);
      this.scene.add("Title", TitleScene);
      this.scene.add("Leaderboard", LeaderboardScene);
      this.scene.add("Options", OptionsScene);
      this.scene.add("Credits", CreditsScene);
      this.scene.add("Game", GameScene);
      this.scene.start("Boot");
    }
  }

  window.onload = () => {
    window.game = new Game();
  };
} else {
  document.getElementById("hide-unless-username").classList.remove(["d-none"]);
  const input = document.getElementById("nameInput");
  const button = document.getElementById("submitButton");
  button.addEventListener("click", () => {
    helpers.submitNameForm(input);
    window.location.reload();
  });
}
