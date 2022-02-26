canvas=document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");

background_image="mars.jpg";
rover_image="rover.png";

rover_x=90;
rover_y=200;
rover_height=100;
rover_width=100;

function add(){
    //codes to upload background-image for canvas
    bg_imgtag=new Image();
    bg_imgtag.onload=uploadBackground;
    bg_imgtag.src=background_image;

    //codes to upload rover-image for canvas
    r_imgtag=new Image();
    r_imgtag.onload=uploadRover;
    r_imgtag.src=rover_image;
    

}
function uploadBackground(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(r_imgtag,rover_x,rover_y,rover_width,rover_height);
    
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    console.log("this is a key based event");
    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=='37'){
        console.log("left");
        left();
    }
    if(keypressed=='38'){
        console.log("Up");
        up();
        
    }
    if(keypressed=='39'){
        console.log("right");
        right();
    }
    if(keypressed=='40'){
        console.log("Down");
        Down();
    }
}
function left(){
    if(rover_x>=0){
rover_x=rover_x-10;
console.log("left x="+rover_x);
uploadBackground();
uploadRover();


   }

}
function right(){
    if(rover_x<=700){
    rover_x=rover_x+10;
    console.log("right x="+rover_x);
    uploadBackground();
    uploadRover();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("up y="+rover_y);
        uploadBackground();
            uploadRover();

        
        
    }
}
function Down(){
    if(rover_y<=500){
   rover_y=rover_y+10;
   console.log("down y="+rover_y);
   uploadBackground();
   uploadRover();
    }
}
