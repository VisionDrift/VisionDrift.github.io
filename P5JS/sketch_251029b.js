function setup() {
createCanvas(600, 600);
}
function draw() {
background(224);
//background square
strokeWeight(7); 
stroke(0);
fill(255, 129, 44);
rect(100,30,400,600);

//body and head
strokeWeight(7); 
fill(0, 255, 0, 160);
rect(150,320,300,400);
fill(255, 187, 142);
ellipse(300, 200, 220, 250);

//shirt, arms, and glasses
fill(0);
quad(210,300,390,300,240,500,360,500);
fill(300);
line(200,400,200,500);
line(400,400,400,500);
fill(255, 187, 142);
rect(150,450,50,147);
rect(400,450,50,147);
fill(300,300,300,200);
rect(250,150,100,40);
rect(360,150,100,50);

//hair and details
fill(0);
ellipse(200,100,70,100);
rotate(.1);
ellipse(340,51,250,080);
fill(200);
strokeWeight(0); 
rect(250,65,180,02);
rect(230,45,180,02);

//Decorations
strokeWeight(7); 
fill(300);
rect(077,280,50,50);
rect(060,300.50,50);
line(077,280,060,300);
line(115,280,100,300);
line(114,330,100,350);
rotate(-.1);
rect(510,180,50,50);
rect(530,200.50,50);
line(510,180,530,200);
line(560,180,580,200);
line(510,230,530,250);

strokeWeight(15);
stroke(255, 129, 44);
ellipse(300,250,50,50);

strokeWeight(07);
stroke(32,63,172);
fill(32,63,172);
ellipse(300,250,10,10);

strokeWeight(09);
stroke(255, 129, 44);
fill(255, 129, 44);
strokeJoin(ROUND); // Round the stroke corners
line(290,210,320,228);
line(250,225,310,225);
line(250,260,280,225);

}
