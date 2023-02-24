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
    let arcade = this.load.bitmapFont("arcade",
    "src/assets/font/pressstart.png",
    "src/assets/font/pressstart.fnt"
    )
  },
  create: function () {
    this.helloText = this.add.bitmapText(400, 300, "arcade", 
    "Hello Phaser").setOrigin(0.5);
    // this.arcade = this.add.bitmapText(200,200, "arcade",
    //     "Bom dia, pessoal").setOrigin(0.5);
    // // console.log(this.arcade);
    // this.arcade.setDropShadow(2, 2,'0xf0f000', 1);
    this.cursors = this.input.keyboard.createCursorKeys();
    console.log(this.input.keyboard);
    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      space: Phaser.Input.Keyboard.KeyCodes.SPACE
    })
    console.log(this.cursors);
  },
  update: function(){
    // let angle = this.arcade.angle
    // this.arcade.angle += 1;
    // this.helloText.x += 20
    // if(this.helloText.x > 1000){
    //   this.helloText.x = -200
    // }
    if(this.cursors.left.isDown){
      this.helloText.x -= 10
    }
    if(this.cursors.right.isDown){
      this.helloText.x += 10
    }
    if(this.inputKeys.up.isDown || this.cursors.up.isDown){
      this.helloText.y -= 10
    }
    if(this.cursors.down.isDown){
      this.helloText.y += 10
    }
    if(this.helloText.x > 938){
      this.helloText.x = -138
    }else if(this.helloText.x < -138){
      this.helloText.x = 938
    }
    if(this.helloText.y > 850){
      this.helloText.y = -50
    }else if(this.helloText.y < -50){
      this.helloText.y = 850
    }
    console.log(this.helloText.width)
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