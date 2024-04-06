import Phaser from "phaser";

export const createAnims = (anims: Phaser.Animations.AnimationManager) => {
  anims.create({
    key: "europa-idle",
    frames: anims.generateFrameNames("europa", {
      start: 0,
      end: 399,
      prefix: "europa",
      suffix: ".png",
    }),
    repeat: -1,
    // frameRate: 16,
  });
};
