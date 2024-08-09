let cor;
let posicaoHorizontal; 
let posicaoVertical;  

function setup() {
  createCanvas(800, 800);
background('gray');
  cor=color(150,60,250);
  posicaoHorizontal= 600;
  posicaoVertical= 600;
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical,90);

  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal -1;
  }
  
  if(mouseX > posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal +1;
  }
   
  if(mouseY < posicaoVertical){                                                     
     posicaoVertical = posicaoVertical -1; 
  }
  
  if(mouseY > posicaoVertical){
    posicaoVertical = posicaoVertical +1;  
}

  if(mouseIsPressed){
    cor=color(150,60,250);
   random(0,100); 
  }
}