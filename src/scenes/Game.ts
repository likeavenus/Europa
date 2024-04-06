import { Scene } from "phaser";
import Europa from "../objects/europa/Europa";
import { GameObjectsKeys } from "../constants";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  europa: Phaser.Physics.Matter.Sprite;

  constructor() {
    super("Game");
  }

  create() {
    this.camera = this.cameras.main;
    this.europa = new Europa(
      this,
      innerWidth / 2,
      innerHeight / 2,
      GameObjectsKeys.Europa,
      "europa"
    );
    this.camera.setBackgroundColor(0x000000);
  }
}
