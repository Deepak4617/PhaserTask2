import React, {
  useEffect,
  useRef
} from 'react';

import Phaser from 'phaser';
import backGround from '../assets/image/back.jpg';
import ball2 from '../assets/image/ball.png';

const PhaserGame = ({ direction }) => {
  const phaserContainer = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 400,
      height: 400,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scene: {
        preload: function () {
          this.load.image('ball', ball2);
          this.load.image('background', backGround);
        },
        create: function () {
          this.add.image(200, 200, 'background').setOrigin(0.5, 0.5).setDisplaySize(400, 400);

          this.ball = this.physics.add.image(200, 200, 'ball');
          this.ball.setCollideWorldBounds(true);
          this.ball.setBounce(1, 1);
          this.ball.setVelocity(Phaser.Math.Between(-200, 300), Phaser.Math.Between(-200, 300));
          this.ball.setScale(0.070);

          gameRef.current.ball = this.ball;
        },
        update: function () {
        }
      }
    };

    const game = new Phaser.Game(config);
    phaserContainer.current.appendChild(game.canvas);
    gameRef.current = game;

    return () => {
      game.destroy(true);
    };
  }, []);

  useEffect(() => {
    if (gameRef.current && gameRef.current.ball) {
      const ball = gameRef.current.ball;
      const speed = 200;

      switch (direction) {
        case "Button1":
          ball.setVelocity(100, -speed);
          break;
        case "Button2":
          ball.setVelocity(-speed, -300);
          break;
        case "Button5":
          ball.setVelocity(-speed, -60);
          break;
        case "Button3":
          ball.setVelocity(speed, -50);
          break;
        case "Button4":
          ball.setVelocity(speed, 100);
          break;
        case "Button6":
          ball.setVelocity(-speed, 100);
          break;
        case "Button7":
          ball.setVelocity(-speed, 300);
          break;
        case "Button8":
          ball.setVelocity(speed, 300);
          break;
        default:
          break;
      }
    }
  }, [direction]);

  return <div ref={phaserContainer}></div>;
};

export default PhaserGame;
