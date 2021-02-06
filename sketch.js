var gardenImg;
var cat,catImg1,catImg2,catImg3,catImg4;
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png");
    catImg3 = loadAnimation("cat3.png");
    catImg4 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,700,20,20);
    cat.addAnimation(catImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("cat Running",catImg2);
      cat.changeAnimation("cat Running");

  }


}
