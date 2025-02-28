import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

const PongGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return; // Prevent multiple Phaser instances

    const config = {
      type: Phaser.AUTO,
      parent: "phaser-container",
      width: 800,
      height: 600,
      physics: { default: "arcade", arcade: { debug: false } },
      scene: { preload, create, update },
    };

    let ball, leftPaddle, rightPaddle, cursors, wKey, sKey;
    let leftScore = 0,
      rightScore = 0,
      scoreText;

    const game = new Phaser.Game(config);
    gameRef.current = game;

    function preload() {}

    function create() {
      // Create paddles using Phaser Graphics API
      leftPaddle = this.add.graphics();
      leftPaddle.fillStyle(0xffffff, 1); // White color
      leftPaddle.fillRect(0, 0, 20, 100); // Width: 20px, Height: 100px
      leftPaddle = this.physics.add.existing(leftPaddle);
      leftPaddle.x = 50;
      leftPaddle.y = 250;
      leftPaddle.setImmovable(true);

      rightPaddle = this.add.graphics();
      rightPaddle.fillStyle(0xffffff, 1);
      rightPaddle.fillRect(0, 0, 20, 100);
      rightPaddle = this.physics.add.existing(rightPaddle);
      rightPaddle.x = 730;
      rightPaddle.y = 250;
      rightPaddle.setImmovable(true);

      // Create the ball using Graphics
      ball = this.add.graphics();
      ball.fillStyle(0xff0000, 1); // Red color
      ball.fillCircle(10, 10, 10); // Circle with radius 10px
      ball = this.physics.add.existing(ball);
      ball.x = 400;
      ball.y = 300;
      ball.setCollideWorldBounds(true);
      ball.setBounce(1);
      ball.setVelocity(200, 200);

      // Input handling
      cursors = this.input.keyboard.createCursorKeys();
      wKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

      scoreText = this.add.text(350, 20, "0 - 0", {
        fontSize: "32px",
        fill: "#fff",
      });

      this.physics.add.collider(ball, leftPaddle, paddleHit, null, this);
      this.physics.add.collider(ball, rightPaddle, paddleHit, null, this);
    }

    function update() {
      if (wKey.isDown) leftPaddle.y -= 5;
      else if (sKey.isDown) leftPaddle.y += 5;

      if (cursors.up.isDown) rightPaddle.y -= 5;
      else if (cursors.down.isDown) rightPaddle.y += 5;

      if (ball.x <= 0) {
        rightScore++;
        resetBall();
      } else if (ball.x >= 800) {
        leftScore++;
        resetBall();
      }

      scoreText.setText(`${leftScore} - ${rightScore}`);
    }

    function paddleHit(ball, paddle) {
      let diff = ball.y - paddle.y;
      ball.setVelocityY(diff * 5);
    }

    function resetBall() {
      ball.setPosition(400, 300);
      ball.setVelocity(200 * (Math.random() > 0.5 ? 1 : -1), 200 * (Math.random() > 0.5 ? 1 : -1));
    }

    return () => {
      game.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="phaser-container" />;
};

export default PongGame;
