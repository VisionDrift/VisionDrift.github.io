//ball catch
//
//

var trix = 200;
var triy = 200;
var cubex = 400;
var cubey = 400;
var cubeSize = 40;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState = 1;
var randomGoal = 1;

function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);
} //end of setup


function draw() {
background(220);
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
  
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=5){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx,bally,mouseX,mouseY);

}//end of level 1

function levelTwo(){
  background(125, 218, 88);
  text("level 2!", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=20){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
  
}//end of level 2

function levelThree(){
  background(255, 236, 161); 
  text("level 3!", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=30){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx, bally, ballSize-10, ballSize-10);
  
}//end of level 3

function levelFour(){
  background(166, 4, 5);
  text("level 4!!", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall<ballSize/2){
    ballx=random(width);
    bally=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  if(score >=40){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx, bally, ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(550), bally+random(-550), ballSize-10, ballSize-10);
  ellipse(ballx+random(-550), bally+random(550), ballSize-10, ballSize-10);
      
}//end of level 4

function levelFive(){
  background(77, 1, 98);
  text("level 5!!", width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  var distTocube = dist(cubex,cubey,mouseX,mouseY);

  if((distToBall<ballSize/2) && (randomGoal <=299)){
    ballx=random(width);
    bally=random(height);
    randomGoal=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  if((distTocube<cubeSize/2) && (randomGoal >=300)){
    cubex=random(width-10);
    cubey=random(height-10);
    randomGoal=random(height);
    score = score+ 1;
  }//checks if mouse touches ball
  
  if(score >=50){
    background(random(255),random(255),random(255));
    gameState = gameState+1;
  }
  
  //line(ballx,bally,mouseX,mouseY);
  ellipse(ballx, bally, ballSize-10, ballSize-10);
  rect(cubex,cubey,cubeSize,cubeSize);
}  

function win(){
  background(255, 222, 89);
  textSize(100);
  text("WIN!!!", width/2, height/2);
  textSize(20);
}//end of win


  
