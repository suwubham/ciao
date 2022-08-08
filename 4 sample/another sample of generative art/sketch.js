

f=50; //font for asii code
col = ["red","yellow","green","orange","purple"]  //array // colors 
function setup() {
	createCanvas(1000, 1500);   //size
	background(100,20,20,30);   //Sets color for the background RGB
	textSize(f);    //font f
	for (x=0;x<width+f;x+=f*0.7) {//grid loop
	  for (y=0;y<height+f;y+=f*1.2){
		c=random(3);
		stroke(col[floor(random(3))]) //stroke = color for the outline of shapes
		fill(col[floor(random(5))])  //fill = color for inside 
if (c<1){
	text(" ▓",x,y)
}
     else if (c<2){
	  text(" ▓",x,y)
     }

else if (c<3){
	text("▒ ",x,y) //these patters are from ASCII code box 
  fill(40,20,30,11)
}
else if (c<4){
	text("▓",x,y)
  fill(40,20,30,11);
}
}
}  
}
/*function draw(){            //can write by using mouse 
  noStroke();
  fill(10,20,200,50);
  ellipse(mouseX,mouseY,20,20)}/*/


function keyTyped() {               //once every time a key is pressed, but action keys such as Backspace, Delete, Ctrl, Shift, and Alt are ignored.
if (key === "p") {
save("myCanvas.jpg");
}
}

