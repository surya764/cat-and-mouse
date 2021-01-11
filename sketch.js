var garden,gardenImage;
var tom_running;tom_collision,tom_one;
var jerry_waving,jerry_one,jerry_collision;

function preload() {
    //load the images here

    tom_running = loadAnimation("tomTwo.png","tomThree.png");
    tom_collision= loadAnimation("tomFour.png");
    tom_one     = loadAnimation("tomOne.png");

    jerry_waving= loadAnimation("jerryTwo.png","jerryThree.png");
    jerry_collision= loadAnimation("jerryFour.png");
    jerry_one   = loadAnimation("jerryOne.png");

    gardenImage = loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(600,400,50,50);
    tom.addAnimation("tomOne",tom_one);

    jerry = createSprite(200,400,50,50);
    jerry.addAnimation("jerryOne",jerry_one);

    garden = createSprite(900,700,0,0);
    garden.addAnimation("garden",gardenImage);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

function keyPressed(){
    
}