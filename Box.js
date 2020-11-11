class Box{
    constructor(x, y, width, height){
        var options1 = {
            restitution : 0.8
          }
          this.body = Bodies.rectangle(x, y, width, height, options1);
          World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
