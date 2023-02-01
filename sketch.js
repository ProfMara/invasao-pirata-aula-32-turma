const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

//cria uma matriz
var matrizBalas = [];

var navio;

function preload(){
    //carrega a imagem do fundo
    cenario = loadImage("fundo.gif");
    


}

function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;


    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);


    angleMode(DEGREES);
    torre = new Torre(160, 350,150,310);
    canhao = new Canhao(185,135,200,120);
    bala = new Bala (canhao.x, canhao.y);

    navio = new Navio(width - 100, height - 50);

    rectMode(CENTER);
    imageMode (CENTER);
}

function draw() {
    Engine.update(engine);
    background("cyan");
    image(cenario, width/2, height/2, width, height)

    fill("green");
    rect(solo.position.x, solo.position.y, width, 10);
    torre.show();

    for(var i = 0; i < matrizBalas.length; i++){
        if( matrizBalas[i] !== undefined ){
            matrizBalas[i].mostrar();
            if( matrizBalas[i].body.position.x >= width ){
                World.remove(world, matrizBalas[i].body);
                matrizBalas.splice(i,1);
            }
            else if(matrizBalas[i].body.position.y >= height-50){
                World.remove(world, matrizBalas[i].body);
                matrizBalas.splice(i,1);
            }
        }        
    }

    bala.mostrar();
    canhao.show();

    navio.mostrar();
}
function keyPressed(){
    if(keyCode == 32){
        bala = new Bala(canhao.x, canhao.y);    
        bala.atirar();
        matrizBalas.push(bala);
    }
}

