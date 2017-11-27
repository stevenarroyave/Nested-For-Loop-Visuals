//DAT405 / GAD405
//03_NestedForLoop - Visual
// Johan Steven Ospina Arroyave

let size = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill(215, 200, 170);

  //Run the nested loop for x, and y
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      fill(215,200,170);
      //Draw the shape at the corresponding position
      //This will generate a dynamic position for the x and y
      //The shape is redrawn as many times as the loop says (in this case 100)
      rect(size * x, size * y, size, size);



 for (let y = 0; y < 10; y++) {
   for (let x=0; x < 10; x++) {
     rect(size * x+25/2, size * y+25/2, 25, 25);
        fill(random(0,255), random(0,255), random(0,255));
 }
}




    }
  }
}
