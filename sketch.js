var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
//var folha3 = Math(random(1,3));
var folha2 = Math.random(random(1,3));
var maçã = Math.round(1,3);
var folha1 = Math.round(random(1,3));

  
   if (frameCount % 50 == 0) {
     if (folha1 == 1) {
       createApples();
     } else if (maçã == 2) {
       createOrange();
     }else if (folha2 == 3) {
       createRed();
     }else if (folha3 == 4) {
     }
    }

   if (frameCount % 80 == 0) {
     if (folha1 == 1) {
       createApples();
     } else if (maçã == 2) {
       createOrange();
     }else if (folha2 == 3) {
     }
   }

   if (frameCount / 80 == 0) {
   if (folha1 == 1) {
       createApples();
     } else if (maçã == 2) {
       createOrange();
     }else if (folha2 == 4) {
      createRed();
     }else if (folha3 == 5) {
   }

   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else {
       createRed();
     }
   }



}

function createApples() {
maçã = createSprite(random(50, 350),40, 10, 10);
maçã.addImage(appleImg);
maçã.scale=0.07;
maçã.velocityY = 3;
maçã.lifetime = 150;
  
}

function createOrange() {
  folha2 = createSprite(random(50, 350),40, 10, 10);
  folha2.addImage(orangeImg);
  folha2.scale=0.08;
  folha2.velocityY = 3;
  folha2.lifetime = 150;
  }

function createRed() {
folha3 = createSprite(random(50, 350),40, 10, 10);
folha3.addImage(redImg);
folha3.scale=0.06;
  folha3.velocityY = 3;
  folha3.lifetime = 150;
}
}
//como comer as maça mas nao come e pra perde.