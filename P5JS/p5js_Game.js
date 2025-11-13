//ball catch
//
//

var img;
var img2;
var img3;
var img4;
var img5;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = 1;
var randomGoal = 1;
var randomX = 300;
var randomY = 300;



function preload() {
  img = loadImage("https://VisionDrift.github.io/images/Shiori-Novella_pr-img_01.png");
  img2 = loadImage("https://VisionDrift.github.io/images/NovelKnight.png");
  img3 = loadImage("https://VisionDrift.github.io/images/BookWyrms.png");
  img4 = loadImage("https://VisionDrift.github.io/images/Pages2.png");
  img5 = loadImage("https://VisionDrift.github.io/images/Jail-Cell-PNG-Isolated-Pic.png");

}

function setup() {
background(220);
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
} //end of setup


function draw() {
background(220);
if (keyIsPressed) { //checks for when a key is pressed on the keyboard
    choice = key; // set choice to the key that was pressed
  }


if (gameState == 1){
  levelOne();
  }//end of game state checker
if (gameState == 2){
  levelTwo();
  }//end of game state checker
if (gameState == 3){
  levelThree();
  }//end of game state checker
if (gameState == 4){
  levelFour();
  }//end of game state checker
if (gameState == 5){
  levelFive();
  }//end of game state checker
if (gameState == 6){
  win();
  }//end of game state checker
text(("Score: "+ score), width/2, 40);



}//end of draw

function levelOne(){
  text("level 1!", width/2, height-20);
  text("Catch her!", width/2, height-80);
  frameRate(60);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width-100);
    bally=random(height-100);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=5){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  image(img, ballx-50, bally-40, ballSize+50, ballSize+80);
  line(ballx,bally,mouseX,mouseY);

}//end of level 1

function levelTwo(){
  background(125, 218, 88);
  frameRate(60);
  text("level 2!", width/2, height-20);

  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width-100);
    bally=random(height-100);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=20){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  image(img, ballx-50, bally-40, ballSize+50, ballSize+80);
  

  forest(-300, 10);  
  forest(150, 10);
  forest(-150, 10);  
  forest(10, 10);
  
  forest(-200, 100);  
  forest(150, 100);
  forest(-100, 100);  
  forest(10, 100);
  fill(0)
}//end of level 2

function levelThree(){
  background(255, 236, 161); 
  text(frameCount, 50, 50);

  frameRate(60);
  text("level 3!", width/2, height-20);
  var distToBall = dist(ballx+30,bally+25,mouseX,mouseY);
  if(distToBall<(ballSize/2)-10){
    ballx=random(width-100);
    bally=random(height-100);
    score = score+ 1;
    startCounting = true; 
  }//checks if mouse touches ball
  if(score >=30){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  image(img, ballx, bally, ballSize+20, ballSize+50);
  image(img2, frameCount-200, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-300, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-400, random(height-100), ballSize+50, ballSize+50);
  image(img2, frameCount-500, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-600, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-700, random(height-100), ballSize+50, ballSize+50);
  image(img2, frameCount-800, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-900, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-1000, random(height-100), ballSize+50, ballSize+50);
  image(img2, frameCount-1100, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-1200, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-1300, random(height-100), ballSize+50, ballSize+50);  
  image(img2, frameCount-1400, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-1500, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-1600, random(height-100), ballSize+50, ballSize+50);  
  image(img2, frameCount-1700, random(height-100), ballSize+80, ballSize+80);
  image(img3, frameCount-1800, random(height-100), ballSize+100, ballSize+100);
  image(img4, frameCount-1900, random(height-100), ballSize+50, ballSize+50);  
}//end of level 3

function levelFour(){
  background(166, 4, 5);
  frameRate(60);
  text("level 4!!", width/2, height-20);
  var distToBall = dist(ballx+30,bally+25,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width-100);
    bally=random(height-100);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=40){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  image(img, ballx, bally, ballSize+20, ballSize+50);
 
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    
  image(img2, random(-20, width), random(-20, height), ballSize+80, ballSize+80);
  image(img3, random(-20, width), random(-20, height), ballSize+100, ballSize+100);
  image(img4, random(-20, width), random(-20, height), ballSize+50, ballSize+50);    

 
      
}//end of level 4

function levelFive(){
  background(77, 1, 98);
  frameRate(1)
  text("level 5!!", width/2, height-20);
  var distToBall = dist(ballx+30,bally+25,mouseX,mouseY);
  var random1;
  var random2;
  var random3;
  if(distToBall<ballSize/2){
    ballx=random(width-100);
    bally=random(height-100);
    random1= random(height-100);
    random2= random(height-100);
    random3= random(height-100);
    score = score+ 1;
  }//checks if mouse touches ball

  if(score >=50){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  ballx=random(width-50);
  bally=random(height-50);  
  image(img, ballx, bally, ballSize+20, ballSize+50);
  
  image(img2, random1+50, random1-100, ballSize+80, ballSize+80);
  image(img3, random2+100, random2+50, ballSize+100, ballSize+100);
  image(img4, random3-100, random3+100, ballSize+50, ballSize+50);    
  
}

function win(){
  frameRate(60);
  background(255, 222, 89);
  textSize(30);
  text("You Caught Her! Good Job!", width/2, height/2);
  textSize(20);
  text("Press R to restart", width/2, height/2+30);
  textSize(20);
  image(img, (width/2)-85, (height/2)+100, ballSize+120, ballSize+150);
  image(img5, (width/2)-85, (height/2)+100, ballSize+120, ballSize+150);

}//end of win

function keyPressed() {
  if (key === 'r' || key === 'R') {
    restartGame();
  }
}

function restartGame() {
  // Reset main variables
  frameRate(60);
  score = 0;
  gameState = 1;
}

function forest(add, addX){
  fill(14,142,23);
  triangle(randomX-300+addX, randomY+add, randomX+50-300+addX, randomY+50+add, randomX-50-300+addX, randomY+50+add);
  fill(142, 81, 15);
  rect(randomX-10-300+addX, randomY+50+add, 20, 40)
  fill(14,142,23);
  triangle(randomX-150+addX, randomY+add, randomX+50-150+addX, randomY+50+add, randomX-50-150+addX, randomY+50+add);
  fill(142, 81, 15);
  rect(randomX-10-150+addX, randomY+50+add, 20, 40)
  fill(14,142,23);
  triangle(randomX+addX, randomY+add, randomX+50+addX, randomY+50+add, randomX-50+addX, randomY+50+add);
  fill(142, 81, 15);
  rect(randomX-10+addX, randomY+50+add, 20, 40)
  fill(14,142,23);
  triangle(randomX+150+addX, randomY+add, randomX+50+150+addX, randomY+50+add, randomX-50+150+addX, randomY+50+add);
  fill(142, 81, 15);
  rect(randomX-10+150+addX, randomY+50+add, 20, 40)
  fill(14,142,23);
  triangle(randomX+300+addX, randomY+add, randomX+50+300+addX, randomY+50+add, randomX-50+300+addX, randomY+50+add);
  fill(142, 81, 15);
  rect(randomX-10+300+addX, randomY+50+add, 20, 40);
}
