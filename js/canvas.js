// const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];

// const BUBBLE_DENSITY = 100;



// function generateDecimalBetwen(left, right) {
//     return (Math.random()*(left - right) + right).toFixed(2);
// }


// class Bubble {
//     constructor(canvas){
//         this.canvas = canvas;
//         this.getCanvasSise();
//         this.init();
//     }
//     getCanvasSise(){
//         this.canvasWidth = this.canvas.clientWidth;
//         this.canvasHeight = this.canvas.clientHeight;
//     }
//     init(){
//         this.color = COLORS[Math.floor(Math.random()*COLORS.length)];
//         this.alpha = generateDecimalBetwen(5, 10)/10;
//         this.size = generateDecimalBetwen(10, 20);
//         this.translateX = generateDecimalBetwen(0, this.canvasWidth);
//         this.translateY = generateDecimalBetwen(0, this.canvasHeight);
//         this.velocity = generateDecimalBetwen(20, 40);
//         this.movementX = generateDecimalBetwen (-2, 2)/this.velocity;
//         this.movementY = generateDecimalBetwen(1, 20)/this.velocity;
//     }
//     move(){
//         this.translateX = this.translateX - this.movementX;
//         this.translateY = this.translateY- this.movementY;
//         if (this.translateY < 0 || this.translateX < 0 || this.translateX > this.canvasWidth){
//             this.init();
//             this.translateY = this.canvasHeight
//         }
//     }
// }

// class CanvasBackground {
//     constructor(id){
//         this.canvas = document.getElementById("orb-canvas");
//         this.ctx = this.canvas.getContext("2d");
//         this.dpr = window.devicePixelRatio;
//     }
//     start(){
//         this.canvasSize();
//         this.generateBubbles();
//         this.animate();
//     }

// canvasSize(){
//     this.canvas.width = this.canvas.offsetWidth*this.dpr;
//     this.canvas.height = this.canvas.offsetHeight*this.dpr;
//     this.ctx.scale(this.dpr, this.dpr);
// }

// animate(){
//     this.ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

//     this.bubblesList.forEach((bubble) => {
//         bubble.move();
//         this.ctx.translate(bubble.translateX, bubble.translateY);
//         this.ctx.beginPath();
//         this.ctx.arc(0, 0, bubble.size, 0, 2*Math.PI);
//         this.ctx.fillStyle = "rgba(" + bubble.color + "," + bubble.alpha + ")";
//         this.ctx.fill();
//         this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
//     })
//     requestAnimationFrame(this.animate.bind(this));
// }

// generateBubbles(){
//     this.bubblesList = [];
//     for (let i = 0; i < BUBBLE_DENSITY; i++){
//         this.bubblesList.push(new Bubble(this.canvas))
//     }
// }
// }

// const canvas = new CanvasBackground("orb-canvas");
// canvas.start();















