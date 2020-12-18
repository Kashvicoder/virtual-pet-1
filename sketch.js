//Create variables here
var happyDog,sadDog;
var dog;
var db;
var Food;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png")
  sadDog=loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(500, 500);
  
  db = firebase.database();
  dog = createSprite(250,300,100,100);
  dog.addImage(sadDog);
  dog.scale = 0.1;
  db.ref('food').on("value",function(data){
    Food = data.val();
  })
  
}


function draw() {  

  background("lavender");

  if(keyWentDown(UP_ARROW)){
    dog.addImage(happyDog);
    db.ref('/').update({
      'food':Food -1
    })
  }

  fill("black");
  textSize(18);
  text("Food Remaining : "+Food,300,50);
  text("press up arrow to feed DRAGO milk",100,380);
  
  
  
  drawSprites();
  //add styles here

}



