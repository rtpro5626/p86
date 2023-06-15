var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(img){
var objetoimagen=img
objetoimagen.scaleToWidth(700)
objetoimagen.scaleToHeigh(510)
objetoimagen.set({
    top:0,
    left:0
})
canvas.add(objetoimagen)
})	
	
}

function playSound(){
	x.play()
}
