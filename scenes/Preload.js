export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("sky", "./assets/images/skay.webp");
    this.load.image("platform", "./assets/images/platform.png");
    this.load.spritesheet("player", "./assets/images/player.png", {
      frameWidth: 184,
      frameHeight: 325,
    });

    this.load.audio("death", [
      "./assets/sounds/death.mp3",
      "./assets/sounds/death.ogg",
    ]);
    this.load.audio("run", [
      "./assets/sounds/run.mp3",
      "./assets/sounds/run.ogg",
    ]);
    this.load.audio("stick", [
      "./assets/sounds/stick.mp3",
      "./assets/sounds/stick.ogg",
    ]);
    this.load.audio("pick", [
      "./assets/sounds/pick.mp3",
      "./assets/sounds/pick.ogg",
    ]);
    this.load.audio("click", [
      "./assets/sounds/click.mp3",
      "./assets/sounds/click.ogg",
    ]);
  }

  create() {
    this.addPlayerAnims();

    this.add.image(400, 300, "sky");

    this.add
      .text(400, 100, "Juego de plataformas", {
        fontSize: "32px",
        fill: "#fff",
      })
      .setOrigin(0.5);

    this.add
      .sprite(400, 300, "player")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("game");
      });
  }

  addPlayerAnims() {
    this.anims.create({
      key: "run",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "jump",
      frames: this.anims.generateFrameNumbers("player", {
        start: 6,
        end: 11,
      }),
      frameRate: 10,
      repeat: 0,
    });
  }
}
