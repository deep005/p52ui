function Cell(a, b, i, num){
    this.a = a;
    this.b = b;
    this.i = i;
    this.num = num;

}
Cell.prototype.show = function(){
    noFill();
    stroke(255);
    rect(this.a, this.b, 50, 50);
    fill(255);
    textSize(32);
    text(this.num, this.a +17, this.b + 40);
    
}