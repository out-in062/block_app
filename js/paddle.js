// js/paddle.js
'use strict';

export class Paddle {
    // x軸
    x;
    // y軸
    y;
    // 幅
    width;
    // 高さ
    height;
    // x軸の移動速度
    dx = 0;
    // 移動速度
    speed;
    // コンテキスト
    context;

    constructor(context, x, y, width, height, speed) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }


    // 移動する
    move() {
        this.x += this.dx;
    }

    // 描画する
    draw() {
        // パドルを描画する
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = "green";
        this.context.fill();
        this.context.closePath();
    }
}