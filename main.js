var mouseevent="empty";
var last_x,last_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
var color="Red";
var widthofline=2;
var screenwidth=screen.width;
new_width=screenwidth-70;
new_height=screen.height-300;

if(screenwidth<992){
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup"
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave"
}
    canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke()
    }
    last_x=current_position_of_mouse_x;
    last_y=current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
canvas.addEventListener("touchstart",mytouchstart)
function mytouchstart(e){
    color=document.getElementById("color").value;
   widthofline=document.getElementById("widthofline").value;
   last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
   last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    current_position_of_touch_x= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y= e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke()
    last_position_of_x=current_position_of_touch_x
last_position_of_y=current_position_of_touch_y  
}
