class Color {
    static White = new Color('White');
    static Yellow = new Color('Yellow');
    static Magenta = new Color('Magenta');
    static Red = new Color('Red');
    static Green = new Color('Green');
    static Blue = new Color('Blue');
    static Purple = new Color('Purple');
    static Brown = new Color('Brown');
    static Orange = new Color('Orange');

constructor(name){
  this.name = name;
}
}

let red = 0.0;
let green = 0.0;
let blue = 0.0;
let dur = 4.0;
let arrIndex = -1;
let textIndex = 0;
let anim = false;
let showText = false;
let futureCol = "";
let colorArr = new Array();
let texts = ["CARPE DIEM","ENJOY YOUR LIFE"];

function colors(){
colorArr = [];
let valueArr = Object.keys(Color);
for (let cls = 0; cls <= int(random(9)); cls++){
  let index = int(random(valueArr.length - 1)); colorArr.push(valueArr[index]);
}
}

function setup(){
createCanvas(window.innerWidth, window.innerHeight);
colors();
textSize(height/6);
textAlign(CENTER);
futureCol = colorArr[0];
}

function draw(){
if (frameCount % (60*dur) == 0){
  arrIndex += 1;
  if (arrIndex == colorArr.length){arrIndex = 0;}
  futureCol = colorArr[arrIndex];
}
if (frameCount % 900 == 0){
 anim = !anim; 
 colors();
 arrIndex = -1;
}
if (frameCount % 1800 == 0){
 showText = !showText;
}
if (frameCount % 3600 == 0){
dur = random(1.0) + 4.0;
textIndex = int(random(texts.length));
}
    if (futureCol == Color.White.name){
      if (anim == true){
        red += (1.0 - red) / (frameRate * dur);
        green += (1.0 - green) / (frameRate * dur);
        blue += (1.0 - blue) / (frameRate * dur);
      } else {red = 1.0; green = 1.0; blue = 1.0;}
    }
    else if (futureCol == Color.Yellow.name){
      if (anim == true){
      red += (1.0 - red) / (frameRate * dur);
      green += (1.0 - green) / (frameRate * dur);
      blue += (0.0 - blue) / (frameRate * dur);
      } else {red = 1.0; green = 1.0; blue = 0.0;}
    }
    else if (futureCol == Color.Magenta.name){
      if (anim == true){
        red += (1.0 - red) / (frameRate * dur);
        green += (0.0 - green) / (frameRate * dur);
        blue += (1.0 - blue) / (frameRate * dur);
      } else {red = 1.0; green = 0.0; blue = 1.0;}
    }
    else if (futureCol == Color.Red.name){
      if (anim == true){
      red += (1.0 - red) / (frameRate * dur);
      green += (0.0 - green) / (frameRate * dur);
      blue += (0.0 - blue) / (frameRate * dur);
      } else {red = 1.0; green = 0.0; blue = 0.0;}
    }
    else if (futureCol == Color.Green.name){
      if (anim == true){
      red += (0.0 - red) / (frameRate * dur);
      green += (1.0 - green) / (frameRate * dur);
      blue += (0.0 - blue) / (frameRate * dur);        
      } else {red = 0.0; green = 1.0; blue = 0.0;}
    }
    else if (futureCol == Color.Blue.name){
      if (anim == true){
      red += (0.0 - red) / (frameRate * dur);
      green += (0.0 - green) / (frameRate * dur);
      blue += (1.0 - blue) / (frameRate * dur);        
      } else {red = 0.0; green = 0.0; blue = 1.0;}
    }
    else if (futureCol == Color.Purple.name){
      if (anim == true){
      red += (0.2 - red) / (frameRate * dur);
      green += (0.0 - green) / (frameRate * dur);
      blue += (0.5 - blue) / (frameRate * dur);        
      } else {red = 0.2; green = 0.0; blue = 0.5;}
    }
    else if (futureCol == Color.Brown.name){
      if (anim == true){
      red += (0.3 - red) / (frameRate * dur);
      green += (0.2 - green) / (frameRate * dur);
      blue += (0.1 - blue) / (frameRate * dur);        
      } else {red = 0.3; green = 0.2; blue = 0.1;}
    }
    else if (futureCol == Color.Orange.name){
      if (anim == true){
      red += (1.0 - red) / (frameRate * dur);
      green += (0.45 - green) / (frameRate * dur);
      blue += (0.0 - blue) / (frameRate * dur);        
      } else {red = 1.0; green = 0.45; blue = 0.0;}
    }
      background(red*255.0,green*255.0,blue*255.0);
      if (showText == true){
      text(texts[textIndex],width/2,height/2);
      }
}