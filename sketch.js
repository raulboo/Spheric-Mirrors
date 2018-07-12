let v, f, c
let p_ob, p_im, w_ob, h_ob, a
let object, image

function setup() {
	createCanvas(windowWidth, windowHeight);
	v = 0;
	f = 100;
	c = 2*f;
	p_ob = Math.abs(c);
	w_ob = Math.abs(f)/4;
	h_ob = Math.abs(f);
	object = new Image(p_ob, 0, w_ob, h_ob);
	a = f / (f - p_ob);
	p_im = -a*p_ob;
	image = new Image(p_im, 0, a*w_ob, a*h_ob);
}

function draw() {
	let concave = true
	background(0);
	if (keyIsPressed){
		if (keyCode === LEFT_ARROW) {
            f -= 2;
            c = 2*f
        }
		else if (keyCode === RIGHT_ARROW) {
            f += 2;
            c = 2*f
        }
        else if (key === "C") {
            concave = !concave;
            f = -f;
            c = -c;
        }
	}
	translate(width/2, height/2);
	drawMirror();

	object.changePos(p_ob, 0);
	object.display();
	if (concave) {
		a = f / (f - p_ob);
	} else {
		a = f / (f - p_ob);
	}
	p_im = -a*p_ob;
	image.changePos(p_im, 0);
	image.changeSize(Math.abs(a)*w_ob, a*h_ob);
	image.display();
}

function drawMirror() {
	push();
	translate(v, 0);
	stroke(255);
	noFill();
	arc(-c, 0, 2*c, 2*c, -HALF_PI*Math.sign(c), HALF_PI*Math.sign(c));

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
	line(-c, 10, -c, -10)
	strokeWeight(1)
	text("C", -c, 30);
	pop();
}

function mouseDragged(){
    p_ob = Math.abs(mouseX - width/2);
}
