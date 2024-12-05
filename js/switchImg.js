


function switchImg(smallImg){

    var img = document.getElementById("imageBox");    
    img.style.display = 'block';
    
    var vid = document.getElementById("vidBox");    
    vid.style.display = 'none';
    
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src;

    vid.pause();


}



function switchVid(smallImg){

    var vid = document.getElementById("vidBox");
    vid.style.display = 'block';

    var img = document.getElementById("imageBox");
    img.style.display = 'none';

    var fullImg = document.getElementById("vidBox");
    fullImg.src = smallImg.src;


}
