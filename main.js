function clear_screen(){
    pen.clearRect(0,0,canvas.width,canvas.height);
}
function setDimensions(){
    if(screen.width<=428){
        canvas.width=screen.width-50;
        document.body.style.overflow="hidden"
    }
}
var canvas=document.getElementById('myCanvas')
var pen = canvas.getContext("2d");

var tracker = 0,x1,y1,x2,y2 


function circle(x,y){
    pen.beginPath();
    pen.lineWidth=3;
    pen.strokeStyle=document.getElementById("colour").value;
    pen.arc(x,y,30,0,6.28);
    pen.stroke();
}

window.addEventListener('click',function(event){
    console.log(event);
    var mouseX=event.clientX-canvas.offsetLeft;
    var mouseY=event.clientY-canvas.offsetTop;
    //circle(mouseX,mouseY); 
}
)
window.addEventListener('mousedown',function(){
  tracker = 1  
}
)
window.addEventListener('touchstart',function(event){
    x2=event.touches[0].clientX-canvas.offsetLeft;
    y2=event.touches[0].clientY-canvas.offsetTop;
}
)
window.addEventListener('mouseup',function(){
   tracker = 0 
}
)

window.addEventListener('mousemove',function(event){
    console.log(event);
    x1=event.clientX-canvas.offsetLeft;
    y1=event.clientY-canvas.offsetTop;
    
    if (tracker == 1){
        pen.beginPath();
        pen.lineWidth=3;
        pen.strokeStyle=document.getElementById("colour").value;
        pen.moveTo(x1,y1)
        pen.lineTo(x2,y2)
        pen.stroke(); 
    }

    x2 = x1
    y2 = y1
}
)
window.addEventListener('touchmove',function(event){
    console.log(event);
    x1=event.touches[0].clientX-canvas.offsetLeft;
    y1=event.touches[0].clientY-canvas.offsetTop;
    
    pen.beginPath();
    pen.lineWidth=3;
    pen.strokeStyle=document.getElementById("colour").value;
    pen.moveTo(x1,y1)
    pen.lineTo(x2,y2)
    pen.stroke();

    x2 = x1
    y2 = y1
}
)