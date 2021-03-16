var canvas= new fabric.Canvas("myCanvas");

var player_object, block_object; 

var player_x = 10;
var player_y = 10;

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object= Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(player_object);

    });
}

var block_width = 30;
var block_height = 30;

function block_update(blocks){
    fabric.Image.fromURL(blocks, function(Img){
    block_object= Img;

    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x

    })

    canvas.add(block_object);

    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);


    if(keypressed == "87"){
        console.log("W is pressed");
        block_update("wall.jpg");
    }

    if(keypressed == "71"){
        console.log("G is pressed");
        block_update("ground.png");
    }

    if(keypressed == "76"){
        console.log("L is pressed");
        block_update("light_green.png");
    }

    if(keypressed == "84"){
        console.log("T is pressed");
        block_update("trunk .jpg");
    }

    if(keypressed == "82"){
        console.log("R is pressed");
        block_update("roof.jpg");
    }

    if(keypressed == "89"){
        console.log("Y is pressed");
        block_update("yellow_wall.png");
    }

    if(keypressed == "68"){
        console.log("D is pressed");
        block_update("dark_green.png");
    }

    if(keypressed == "85"){
        console.log("U is pressed");
        block_update("unique.png");
    }

    if(keypressed == "67"){
        console.log("C is pressed");
        block_update("cloud.jpg");
    }

    if(keypressed == "38"){
        up();
        console.log("UP is pressed");
    }
    
    if(keypressed == "40"){
        down();
        console.log("DOWN is pressed");
    }

    if(keypressed == "37"){
        left();
        console.log("LEFT is pressed");
    }

    if(keypressed == "39"){
        right();
        console.log("RIGHT is pressed");
    }

    if(e.shiftKey == true && keypressed == "107"){
        console.log("SHIFT and + are clicked together");
        block_width = block_width + 10;
        block_height = block_height + 10; 
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }

    if(e.shiftKey == true && keypressed == "109"){
        console.log("SHIFT and + are clicked together");
        block_width = block_width - 10;
        block_height = block_height - 10; 
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
}

function right(){
    if(player_x<850){
       player_x  = player_x  + 10;
        canvas.remove(player_object);
        player_update() ;
    }
}

function left (){
    if(player_x>0){
       player_x  = player_x - 10;
       canvas.remove(player_object);
       player_update() ;
    }
}

function up (){
    if(player_y>0){
      player_y   = player_y - 10;
      canvas.remove(player_object);
        player_update() ;  
    }
}

function down(){
    if(player_y<350){
   player_y     =player_y + 10;
   canvas.remove(player_object);
   player_update() ;
    }
}


