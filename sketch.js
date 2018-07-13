let v, f, c
let p_ob, p_im, w_ob, h_ob, a
let object, image

function setup() {
	createCanvas(windowWidth, windowHeight);
	v = 0;
	n_lens = 2
	r = 200
	f = ((n/1) - 1)*(r/2)
	p_ob = Math.abs(r);
	w_ob = Math.abs(f)/4;
	h_ob = Math.abs(f);
	object = new Image(p_ob, 0, w_ob, h_ob);
	p_im = 1/((1/f) - (1/p_ob))
	a = -p_im / p_ob
	image = new Image(p_im, 0, a*w_ob, a*h_ob);
}

function draw() {
	let concave = true
	background(0);
	if (keyIsPressed){
		if (keyCode === LEFT_ARROW) {
            		r -= 2;
            		f = ((n/1) - 1)*(r/2);
        	}
		else if (keyCode === RIGHT_ARROW) {
            		r -= 2;
            		f = ((n/1) - 1)*(r/2);
        	}
        	else if (key === "C") {
            		concave = !concave;
            		f = -f;
            		r = -r;
        	}
	}
	translate(width/2, height/2);
	drawMirror();

	object.changePos(p_ob, 0);
	object.display();
	p_im = 1/((1/f) - (1/p_ob))
	a = -p_im / p_ob
	image.changePos(p_im, 0);
	image.changeSize(Math.abs(a)*w_ob, a*h_ob);
	image.display();
}

function drawMirror() {
	push();
	translate(v, 0);
	stroke(255);
	noFill();
	arc(-r, 0, 2*r, 2*r, -HALF_PI*Math.sign(r), HALF_PI*Math.sign(r));

	push();
	translate(-v, 0);
	line(-width/2, 0, width/2, 0);
	pop();

	strokeWeight(3);
	line(0, 10, 0, -10)
	textSize(15);
	strokeWeight(1)
	textAlign(CENTER);
	text("V", 0, 30);

	strokeWeight(3);
	line(-f, 10, -f, -10)
	strokeWeight(1);
	text("F", -f, 30);

	strokeWeight(3);
	line(-r, 10, -r, -10)
	strokeWeight(1)
	text("A", -r, 30);
	pop();
	
	strokeWeight(3);
	line(f, 10, f, -10)
	strokeWeight(1);
	text("F'", f, 30);

	strokeWeight(3);
	line(r, 10, r, -10)
	strokeWeight(1)
	text("A'", r, 30);
	pop();
}

function mouseDragged(){
    p_ob = Math.abs(mouseX - width/2);
}
