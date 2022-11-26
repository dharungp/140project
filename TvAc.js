img=""
function preload(){
    
    img = loadImage("Tv_and_Ac.jpg");
}

function Back(){
    window.location="index.html"
}


function setup(){
canvas= createCanvas(640,420)
canvas.size(640,420)
canvas.postion(400,400)
}

function draw(){
    image(img,0,0,380,380)

}