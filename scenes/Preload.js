export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("sky", "../public/assets/images/skay.webp");
    this.load.image("platform", "../public/assets/images/platform.png");
    this.load.spritesheet("player", "../public/assets/images/player.png", {
      frameWidth: 184,
      frameHeight: 325
    });
  }

  create() {
    // crear animaciones
    this.scene.start("game");
  }
}
