window.onload = rotate;

var thisAd = 0

function rotate()
{ 
    "use strict";
    var adImages = new Array("assets/indexfeature1.jpg", "assets/indexfeature2.jpg", "assets/indexfeature3.jpg", "assets/indexfeature4.jpg");

    thisAd++;
    if (thisAd === adImages.length)
        {thisAd = 0;}
    document.getElementById("adBanner").src = adImages[thisAd];
    setTimeout(rotate, 3*1000);
}