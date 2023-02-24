// import { FirstGameScene } from './first-scene';
// import { MyScene } from './my-scene';
import Phaser from 'phaser';
import './style.css';



const scene:any = {
  preload: function () {
    this.load.bitmapFont("arcade", 
    "src/assets/font/pressstart.png",
    "src/assets/font/pressstart.fnt"
    )
    this.load.bitmapFont("arcade",
    "src/assets/font/pressstart.png",
    "src/assets/font/pressstart.fnt"
    )
  },
  create: function () {
    this.add.bitmapText(400, 300, "arcade", 
    "Hello Phaser").setOrigin(0.5);
    this.add.bitmapText(100,100, "arcade",
        "Bom dia, pessoal").setOrigin(0);
  }

}

const config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
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