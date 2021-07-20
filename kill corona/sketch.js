
var gameState="intro";
var bg1,bg1Img;
var play;

function preload(){
   bg1Img=loadImage("bg1.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
play=createSprite(windowWidth/2+200,windowHeight/2+200,20,20);

playbg=createSprite(200,200,100,100);


}

function draw(){
 background("grey");
 drawSprites();
 if(gameState=="intro"){
     background(bg1Img);
     fill("lightblue");
     textSize(40);
     text("Kill Corona",windowWidth/2-150,windowHeight/2-250);


     text("press Space to play",windowWidth/2,windowHeight/2);

     if(keyDown("space")){
         gameState="play";
     }
     //image(bg1Img,windowWidth/2,windowHeight/2,width,height);
     }

     if(gameState=="play"){
         background("lightgreen")
         playbg.visible=true;
     }

}







