


function switchImg(smallImg){

    var img = document.getElementById("imageBox");    
    img.style.visibility = 'visible';
    
    var vid = document.getElementById("vidBox");    
    vid.style.visibility = 'hidden';
    
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;

    vid.pause();


}



function switchVid(smallImg){

    var vid = document.getElementById("vidBox");
    vid.style.visibility = 'visible';

    var img = document.getElementById("imageBox");
    img.style.visibility = 'hidden';

    var fullImg = document.getElementById("vidBox");
    fullImg.src = smallImg.src;


}
