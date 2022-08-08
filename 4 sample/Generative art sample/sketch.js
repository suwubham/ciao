//patterns on a grid system (vertical and horizontal lines )

function setup() {
  createCanvas(500,500);
  //fill(200,50,40);
  strokeWeight(1);  //create line
  rectMode(5);
  let space = 20;
  for (x=0;x<width+50;x+=space){              //starts from top left part of canvas             //grid width 
    for (y=0;y<height+50;y+=space){              // height
      stroke(x,200,200);
     line(x,y,x+space,y);                       //row line
     stroke(y,x,30);
       line(x,y,x,y+space);                    //column line
       stroke(200,y,x/2);
      square(x,y,10)                          //squares of the box edges
      fill(200,map(y,0,1000,0,244),x/2);    //map creates 
      square(x+space/2,y+space/2,10)         //squares of the box at the center
    }
  }
}
