
var loader=document.getElementById('loading');
window.addEventListener("load",function(){
    loader.style.display="none";
}) 



var img=document.getElementById('changeImg');
var img2=document.getElementById('changeImg2' );
function nextImage(){
    img.src= 'images/schoolImage.png'
    
}

function previousImage(){
    img.src="images/schoolImage2.jpg"
}


function nextImage2 (){
    img2.src="images/owner.jpeg"

    
   
    
} 

function previousImage2(){
    
    img2.src="images/message.jpg"
    
    
} 

