var canvas = new fabric.Canvas("myCanvas");
var img_height = 30;
var img_width = 30;
var player_x = 10;
var player_y = 10;
var player_img = "";
var block_img = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_img = Img;

        player_img.scaleToWidth(150);
        player_img.scaleToHeight(140);
        player_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_img);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object = Img;

        block_img_object.scaleToWidth(img_width);
        block_img_object.scaleToHeight(img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    var keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == "80"){
        img_height = img_height + 10;
        img_width  = img_width + 10;
        document.getElementById("current_width").innerHTML = img_width;
        document.getElementById("current_height").innerHTML = img_height;
        console.log("shift + p");
    }
    if(e.shiftKey == true && keyPressed == "77"){
        img_height = img_height - 10;
        img_width = img_width - 10;
        document.getElementById("current_width").innerHTML = img_width;
        document.getElementById("current_height").innerHTML = img_height;
        console.log("shift + m");
    }
    if(keyPressed == "70"){
        new_image("ironman_face.png");
        console.log("c");
    }
    if(keyPressed == "66"){
        new_image("hulkd_body.png");
        console.log("b");
    }
    if(keyPressed == "76"){
        new_image("spiderman_legs.png");
        console.log("l");
    }
    if(keyPressed == "72"){
        new_image("captain_america_left_hand.png");
        console.log("h");
    }
    if(keyPressed == "82"){
        new_image("thor_right_hand.png");
        console.log("r");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed =="37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
}
function up(){
    if (player_y >= 0){
        player_y = player_y - img_height;
        console.log("Part height = " + img_height);
        console.log("Player x = " + player_x + " y = "+ player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function left(){
    if(player_x > 0){
       player_x = player_x - img_width;
       console.log("Part width = " + img_width);
       console.log("Player x = " + player_x + " y = " + player_y);
       canvas.remove(player_img);
       player_update();
    }
}
function right(){
    if(player_x <= 850){
        player_x = player_x + img_width;
        console.log("Part width = " + img_width);
        console.log("Player x = " + player_x + " y = " + player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function down(){
    if(player_y <= 460){
        player_y = player_y + img_height;
        console.log("Part height = " + img_height);
        console.log("Player x = " + player_x + " y = " + player_y);
        canvas.remove(player_img);
        player_update();
    }
}
