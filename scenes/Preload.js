export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("sky", "../public/assets/images/skay.webp");
    this.load.image("platform", "../public/assets/images/platform.png");
    this.load.spritesheet("player", "../public/assets/images/player.png", {
      frameWidth: 184,
      frameHeight: 325,
    });
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
