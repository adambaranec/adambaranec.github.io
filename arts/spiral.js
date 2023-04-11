let iterations = 100;
let multiplier = 0;
let radius = window.innerWidth/20;
let look = 1.5;
let densityX = 0;
let densityY = 0;
let red = 0.0;
let green = 0.0;
let blue = 0.0;
let seconds = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  background(red,green,blue);  
  if (frameCount % 60 == 0){seconds += 1;}
  if (seconds == 121){seconds = 1;}
  if (seconds <= 30){
    densityX += (30/1800); densityY += (30/1800);
  }
  else if (seconds > 30 && seconds < 61){
  fill(random(255), random(255), random(255));
  }
  else if (seconds > 60 && seconds < 91){
   densityX -= (30/1800); densityY -= (30/1800);
  }
  else if (seconds > 90 && seconds < 121){
  fill(random(255), random(255), random(255));
  }  
  if (minute() % 2 == 0){
        for (let i = 1; i<=iterations; i++){
          square((window.innerWidth/2-radius/2)+sin(i/look)*(multiplier+(i*densityX-0.02)),(window.innerHeight/2-radius/2)+cos(i/look)*(multiplier-(i*densityY-0.02)),radius);
        }
      }
  if (minute() % 2 == 1){
        for (let i = 1; i<=iterations; i++){
          circle((window.innerWidth/2)+sin(i/look)*(multiplier+(i*densityX-0.02)),(window.innerHeight/2)+cos(i/look)*(multiplier-(i*densityY-0.02)),radius);
        }
  }
  if (frameCount % 7200 == 0){
  iterations = int(random(20,120));
  look = random(3) + 1.0;
  red = random(80);
  green = random(80);
  blue = random(80);
  }
  if (frameCount % 21600 == 0){
  iterations = 100;
  look = 1.5; 
  red = 0.0; green = 0.0; blue = 0.0;
  fill(255,255,255);
  }
}
