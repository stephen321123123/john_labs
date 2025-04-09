class Plane extends Craft {
	constructor(obj) {

		super(obj);

		this.tail = obj.tail ?? 4;
	}

	render(id) {
		push();
		translate(this.pos.x, this.pos.y);

		//this. angle = atan2(this.velY, this.velX);
		fill(0)
		noStroke()
		textSize(12)
		text(id,-6,-6)
		rotate(this.angle);
		strokeWeight(1);
		beginShape();
		vertex(0, 0);
		fill(255,200,50)
		vertex(-this.tail, -this.apWidth / 2);
		vertex(this.apHeight, -this.tail, 0);
		vertex(-this.tail, this.apWidth / 2);
		endShape(CLOSE);

		if (this.alert) {
			noFill();
			stroke(0);
			strokeWeight(2);
			ellipse(this.apHeight * 0.4, 0, this.apHeight * 1.2);
		}

		pop();
	}

	lessSpeed(){
		
		this.speed -= 0.5;
		if(this.speed <0){this.speed = 0.3}
		this.updateVelocity()
	}

}
