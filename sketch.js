
var cell = [];
var sudoku =  [ 0, 0, 3, 0, 2, 0, 6, 0, 0,
                9, 0, 0, 3, 0, 5, 0, 0, 1,
                0, 0, 1, 8, 0, 6, 4, 0, 0,
                0, 0, 8, 1, 0, 2, 9, 0, 0,
                7, 0, 0, 0, 0, 0, 0, 0, 8,
                0, 0, 6, 7, 0, 8, 2, 0, 0,
                0, 0, 2, 6, 0, 9, 5, 0, 0,
                8, 0, 0, 2, 0, 3, 0, 0, 9,
                0, 0, 5, 0, 1, 0, 3, 0, 0];


function setup(){
    createCanvas(450, 450);
    var a =0, b=0;

    for(var i =0; i<81; i++){
        if(i % 9 == 0 && i !=0){
            b = b+50;
            a =0;
        }
        cell[i] = new Cell(a, b , i , sudoku[i]);
        a = a+50;    
    } 
}

function draw(){
    background(51);
    for(var i =0; i<81; i++){
        cell[i].show();
    }
}