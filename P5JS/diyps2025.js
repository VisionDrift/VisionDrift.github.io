var img;

var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken
var angle = 0.0; 

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://veryprofessional3d.github.io/images/cat3.jpg');
  img2 = loadImage('https://VisionDrift.github.io/images/skibidi_toilet_roblox_png_by_bellamxp_dg3l6l9-fullview.png');
}

function setup() {
createCanvas(600, 600);  // canvas size6
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {1 //checks for when a key is pressed on the keyboard
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
 if (toolChoice == '1' ) {  // first tool default
    stroke(0);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') { // second tool eraser
    stroke(screenbg);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);

 //stroke weight controls, doesn't work for custom brushes
  } else if (toolChoice == 'q' || toolChoice == 'Q') { // q changes stroke to default
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'w' || toolChoice == 'W') { // w changes stroke to large
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'e' || toolChoice == 'E') { // e changes strokeweight to very large
    strokeWeight(60);
    line(mouseX, mouseY, pmouseX, pmouseY);

//custom brushes    
  } else if (toolChoice == '3') { // third tool custom ellipse
    strokeWeight(1);
    fill(300, 200, 0);
    ellipse(mouseX, mouseY, 50, 50);
    fill(300, 100, 10);
    ellipse(mouseX, mouseY, 30, 30);
    fill(300);
  } else if (toolChoice == '4') { // tree brush
    strokeWeight(0);
    fill(14,142,23);
    triangle(mouseX, mouseY, mouseX+50, mouseY+50, mouseX-50, mouseY+50);
    fill(142, 81, 15);
    rect(mouseX-10, mouseY+50, 20, 40)
    fill(300)
    strokeWeight(4);
    
  } else if (key == '5') { // this tool calls a function and makes a rectangle
    stroke(0);
    strokeWeight(2);
    testbox(0);

  } else if (toolChoice == '6') {
    strokeWeight(01);
    stroke(0);
    triangle(mouseX, mouseY, mouseX+50, mouseY+50, mouseX-50, mouseY+50,);
    6
  } else if (toolChoice == '7') {
    strokeWeight(01)
    fill(300, 100, 0, 10);
    rect(mouseX, mouseY, 40, 40);
    fill(300);
//image brushes
  } else if (toolChoice == '8') {
    image(img2, mouseX, mouseY, 50, 50);
  } else if (toolChoice == '9') {
    image(img2, mouseX+random(120), mouseY+random(120), 50, 50);
    
//rotating square    
  } else if (toolChoice == '0') {
    translate(mouseX, mouseY);
    rotate(angle);
    rect(-15, -15, 30, 30);
    angle += 0.1;
    
//color choice, default is D = black
  } else if (toolChoice == 'r' || toolChoice == 'R') { // r changes stroke to red
    stroke(228, 8, 10);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (toolChoice == 'o' || toolChoice == 'O') { // o changes stroke to orange
    stroke(254, 153, 0);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);   
    
  } else if (toolChoice == 'y' || toolChoice == 'Y') { // y changes stroke to yellow
    stroke(255, 222, 89);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g changes stroke to green
    stroke(125, 218, 88);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);   
    
  } else if (toolChoice == 'b' || toolChoice == 'B') { // b changes stroke to blue
    stroke(42, 112, 232);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);    
    
  } else if (toolChoice == 'p' || toolChoice == 'P') { // p changes stroke to purple
    stroke(101, 1, 183);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'd' || toolChoice == 'd') { // p changes stroke to default black
    stroke(0, 0, 0);
    strokeWeight(04);
    line(mouseX, mouseY, pmouseX, pmouseY);  
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);5
  rect(mouseX, mouseY, 60, 60);

}


function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine pme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
