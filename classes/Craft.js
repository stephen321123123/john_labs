class Craft {
	constructor(obj) {

		this.pos = createVector(obj.posX ?? random(0, 500), obj.posY ?? random(0, 500))
		// this.posX = obj.posX ?? random(0, 500);
		// this.posY = obj.posY ?? random(0, 500);

		this.speed = obj.speed ?? random(0.2, 1.5);
		this.angle = obj.andgle ?? random(0,360);

		this.apWidth = obj.apWidth ?? 15;
		this.apHeight = obj.apHeight ?? 20;
		this.alert = false;
		
		this.velX = this.speed * cos(this.angle);
		this.velY = this.speed * sin(this.angle); // need to change 
		this.vel = createVector(
			this.speed * cos(this.angle),
			this.speed * sin(this.angle)
		)
	}

	updateVelocity(){
		this.velX = this.speed * cos(this.angle);
		this.velY = this.speed * sin(this.angle);
	}

	addSpeed(){
		this.speed += 0.5;
		this.updateVelocity()
	}

	lessSpeed(){
		this.speed -= 0.5;
		this.updateVelocity()
	}

	turnLeft() {
		this.angle -= 15;
		this.updateVelocity();
	}
	
	turnRight() {
		this.angle += 15;
		this.updateVelocity();
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
		fill(200)
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

	move() {
		this.pos.x = this.pos.x + this.velX;
		this.pos.y = this.pos.y + this.velY;
	}
}
