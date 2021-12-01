var starImg,bgImg;
var star, starBody;
var fada, fadaImg;
var som;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    som = loadSound ("sound/JoyMusic.mp3")
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    som.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(200,200,10,10);
    fada.addAnimation(fadaImage);
    fada.scal = 0.2;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
 background(bgImg);
 if(KeyDOWM("LEFT_ARROW")){
 fada.velocityX = -2;
 fada.velocityY = 0;     
 }

 if(KeyDOWM("RIGHT_ARROW")){
fada.velocityX = 2;
fada.velocityY = 0;     
}
 if(star.y < 470 && starBody.position.Y < 470){
Matter.Body.setStatic(starBody,true);
}

drawSprites();
}

