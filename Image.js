class Image {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  changeSize(w, h){
    this.w = w;
    this.h = h;
  }
  changePos(x, y){
    this.x = x;
    this.y = y;
  }
  display(){
    push();
    fill(255, 255, 0);
    translate(-this.x, this.y)
    rect(-this.w/2, 0, this.w, -this.h);
    pop();
  }
}
