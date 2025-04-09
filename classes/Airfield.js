class Airfield {
	constructor(obj) {
		this.numCrafts = obj.numCrafts || 10;
		this.airFieldWidth = obj.airFieldWidth || 400;
		this.airFieldHeight = obj.airFieldHeight || 400;
		this.crafts = obj.crafts || [];
		this.airFieldPosX = obj.airFieldPosX || 250;
		this.airFieldPosY = obj.airFieldPosY || 250;
		this.generateCrafts();
	}

	renderAirfield() {
		push();
		translate(this.airFieldPosX, this.airFieldPosY);
		fill(200, 60, 60);
		rect(0, 0, this.airFieldWidth, this.airFieldHeight);
		pop();
	}

	renderCrafts() {
		push();
		translate(this.airFieldPosX, this.airFieldPosY);
		this.crafts.forEach((craft, id) => {
			craft.render(id);
		})
		pop();
	}

	generateCrafts() {
		for (let i = 0; i < this.numCrafts; i++) {
			let num = random(0,1);
			if(num<0.5){
				this.crafts.push(
					new Plane({
						posX: random(0, this.airFieldWidth),
						posY: random(0, this.airFieldHeight),
					})
				);
			} else {
				this.crafts.push(
					new Heli({
						posX: random(0, this.airFieldWidth),
						posY: random(0, this.airFieldHeight),
				})
			);
			}
			
		}
	}

	checkPos(craft) {
		if (craft.pos.x >= this.airFieldWidth) {
			craft.pos.x = 0;
			craft.pos.y = map(craft.pos.y, 0, this.airFieldHeight, this.airFieldHeight, 0);
		} else if (craft.pos.x < 0) {
			craft.pos.x = this.airFieldWidth;
			craft.pos.y = map(craft.pos.y, 0, this.airFieldHeight, this.airFieldHeight, 0);
		}

        if (craft.pos.y >= this.airFieldWidth) {
			craft.pos.y = 0;
			craft.pos.x = map(craft.pos.x, 0, this.airFieldWidth, this.airFieldWidth, 0);
		} else if (craft.pos.y  < 0) {
			craft.pos.y = this.airFieldWidth;
			craft.pos.x = map(craft.pos.x, 0, this.airFieldWidth, this.airFieldWidth, 0);
		}
	}

	moveCrafts() {
		this.crafts.forEach((craft) => {
			this.checkPos(craft)
            craft.move();
            
		});
	}

	checkDist() {
		this.crafts.forEach((craft) => {
            craft.alert = false
        });
		let count = 0;
		for (let i = 0; i < this.crafts.length; i++) {
			for (let j = i+1; j < this.crafts.length; j++) {
				let craftA = this.crafts[i];
				let craftB = this.crafts[j];

				let dist = sqrt(sq(craftA.posX - craftB.posX) + sq(craftA.posY - craftB.posY));
                
				if (dist < 20) {
					craftA.alert = true;
					craftB.alert = true;
				}

				count++;
			}
		}
		//console.log(count);
	}
}
