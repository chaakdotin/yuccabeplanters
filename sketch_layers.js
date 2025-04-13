/*!
 * This file is part of Space Type Generator.
 * 
 * Copyright (c) Kiel Mutschelknaus
 * 
 * This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to
 * Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 */

p5.disableFriendlyErrors = true;

let shelfHeightH, shelfWidthH;
let shelfHeightV, shelfWidthV;
let fontSize = 100;
let inpText;
let sWidth;
let textRepeats;
let alphaStep;
let pinchFactor = 20;
let rotateFactor = 0.05;

let layerDepth = 200;

var blockColor, textColor, strokeColor, bkgdColor;

let innerH;
let innerV;
let pinchH, pinchV;

let stackCount;

let fontAnimate;

function preload() {
  fontMenu = loadFont("/assets/IBMPlexMono-Regular.otf");
  fontSelect1 = loadFont("/assets/WorkSans-Regular.ttf");
}

function setup() {
  const canvas = createCanvas(windowWidth,windowHeight, WEBGL);
  canvas.parent('myCanvasContainer'); // attach to the div 
}

function draw() {
  radio = ' ';
  strokeColor = color('#000000');
  textColor = color('#000000');
  blockColor = color('#ffffff');
  bkgdColor = color('#0000ff');
  fontAnimate = fontSelect1;
  background(bkgdColor);

  innerH = 70;
  innerV = 50;
  rotateFactor = 0;
  stackCount = 14;
  fontSize = 100;

  shelfHeightH = height;
  shelfWidthH = width * 4;
  shelfHeightV = height;
  shelfWidthV = height * 4;

  inpText = String("GOING. GOING. GOING. ");
  if(inpText == ""){
    inpText = inpText + " ";
  }

  rectMode(CENTER);
  textFont(fontAnimate);
  textSize(fontSize);
  textAlign(LEFT);

  sWidth = textWidth(inpText);
  textRepeats = floor(width/sWidth) + 3;

  let hSpace = -height/2 - shelfHeightH/2;
  let vSpace = -width/2 - shelfHeightV/2;

  pinchH = -((hSpace+shelfHeightH/2)+innerH)/stackCount;
  pinchV = -((vSpace+shelfHeightV/2)+innerV)/stackCount;

  push();

  if(radio == " "){
    translate(0,0,layerDepth);
  } else if(radio == "  "){
    translate(0,0,layerDepth*3);
    rotateY(PI/8);
    rotateX(PI/8);
  } else if(radio == "   "){
    translate(0,-height/4,layerDepth*2);
    rotateX(PI/8);
  }

  for(var i = stackCount; i>0; i--){
    if(i == stackCount){
      alphaStep = map(frameCount*2%layerDepth,0,layerDepth,0,255);
    } else {
      alphaStep = 255;
    }

    blockColor.setAlpha(alphaStep);
    strokeColor.setAlpha(alphaStep);
    textColor.setAlpha(alphaStep);

    push();
      translate(0,0,i*-layerDepth);
      translate(0,0,frameCount*2%layerDepth);

      for(var j=0; j<4; j++){
        push();
          rotateZ(rotateFactor*i - rotateFactor*(frameCount*2%layerDepth)/layerDepth)
          rotateZ(j*PI/2);

          if(j%2 == 0){
            translate(0,hSpace + pinchH*i - pinchH*(frameCount*2%layerDepth)/layerDepth);
          } else {
            translate(0,vSpace + pinchV*i - pinchV*(frameCount*2%layerDepth)/layerDepth);
          }

          rotateY(radians(1));

          fill(blockColor);
          stroke(strokeColor); strokeWeight(3);

          if(j%2 == 0){
            rect(0,0,shelfWidthH,shelfHeightH);
            translate(0,shelfHeightH/2-20,1);
          } else {
            rect(0,0,shelfWidthV,shelfHeightV);
            translate(0,shelfHeightV/2-20,1);
          }

          for(var k=0; k<textRepeats; k++){
            push();
//              translate(k * sWidth - width,0);
              translate(k * sWidth - sWidth,0);
              translate(-(frameCount*4)%sWidth,0);
              fill(textColor); noStroke();
              text(inpText,0,0);
            pop();
          }

        pop();
      }
    pop();
  }
  pop();

  textFont(fontMenu);
  fill(bkgdColor);
  textSize(10);
  textAlign(LEFT);
  push();
  translate(-width/2, -height/2);
   
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


