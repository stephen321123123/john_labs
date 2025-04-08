class Heli extends Craft {
	constructor(obj) {
		super(obj);
	}

	render(id) {
		push();
		translate(this.pos.x, this.pos.y);

		// Display the id for debugging or identification
		fill(0);
		noStroke();
		textSize(12);
		text(id, -6, -6);
		rotate(this.angle);

		// Render the helicopter body (a simple rectangle)
		strokeWeight(1);
		fill(150, 150, 255);
		rect(0, 0, 10, 10); // This is the body of the helicopter

		// Render the propellers
		this.renderPropellers();

		// Render alert if needed
		if (this.alert) {
			noFill();
			stroke(255, 0, 0);
			strokeWeight(2);
			ellipse(0, 0, this.apHeight * 1.2);
		}

		pop();
	}

	// Function to render the propellers
	renderPropellers() {
		push();
		translate(5, 5); // Position the propellers above the helicopter body
		rotate(frameCount * 16); // Control propeller spin speed

		// Draw a single propeller
		let propellerRadius = 0;  // No need to adjust position since we're only drawing one propeller
		stroke(0);
		strokeWeight(3);
		line(0, 0, 20, 0); // Horizontal propeller blade

		pop();
	}
}
