// import { FirstGameScene } from './first-scene';
// import { MyScene } from './my-scene';
import Phaser from 'phaser';
import './style.css';



const scene: any = {
  preload: function () {
    this.load.spritesheet(
      'tiles',
      'src/assets/images/colored.png',
      {
        frameWidth: 16,
        frameHeight: 16,
        spacing: 1
      });
  },
  create: function () {
    let level = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ]
    const wall = 843
    const floor = 0
    level = level.map(r => r.map(t => t == 1 ? wall : floor))
    const tileSize = 16
    const config = {
      data: level,
      tileWidth: tileSize,
      tileHeight: tileSize,
    }
    const map = this.make.tilemap(config);
    const tileset = map.addTilesetImage('tiles', 'tiles', tileSize, tileSize, 0, 1)
    const ground = map.createStaticLayer(0, tileset, 0, 0);
  },
  update: function () {

  }
}

const config = {
  type: Phaser.WEBGL,
  width: 160,
  height: 160,
  backgroundColor: "#000",
  parent: "game",
  pixelArt: true,
  scene: scene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  }
};
const game = new Phaser.Game(config);