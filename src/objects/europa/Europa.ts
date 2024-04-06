import Phaser from "phaser";
import { GameObjectsKeys } from "../../constants";
import { createAnims } from "./anims";

export default class Europa extends Phaser.Physics.Matter.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture: string,
    name: string
  ) {
    super(scene.matter.world, x, y, texture, name, {
      label: GameObjectsKeys.Europa,
    });

    this.setIgnoreGravity(true);

    createAnims(this.scene.anims);
    this.scene.add.existing(this);
    this.anims.play("europa-idle");
  }
}
