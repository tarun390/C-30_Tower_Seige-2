class Polygon {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1
      }
      this.r = r
      this.body = Bodies.circle(x, y, this.r/2, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CORNER)
	    image(polyImg,-15,-15,30,30)
      pop();
    }
  };