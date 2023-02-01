class Navio{
    constructor(x, y){
        this.body = Bodies.circle(x, y,80);
        World.add(world, this.body);
        this.imagem = loadImage("boat.png");
        //atribua a propriedade speed

    }
    //adicione o método animar


    mostrar(){
        var pos = this.body.position;

        image(this.imagem,pos.x, pos.y, 170, 170);
    }
}