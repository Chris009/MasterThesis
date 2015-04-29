

var choices = [
    { title: "Cappucino", alk: false, url: "./../../../../img/drinks/Cappuccino.jpg" },
    { title: "Kaffee", alk: false, url: "./../../../../img/drinks/kaffeSchwarz.JPG" },
    { title: "Long Drink", alk: false, url: "./../../../../img/drinks/longDrink.jpg" },
    { title: "Latte Macchiato", alk: false, url: "./../../../../img/drinks/lattemacchiato.png" },
    { title: "Bier", alk: true, url: "./../../../../img/drinks/Bier.jpg" },
    { title: "Cola", alk: false, url: "./../../../../img/drinks/Cola.jpg" },
    { title: "Fanta", alk: false, url: "./../../../../img/drinks/fanta.png" },
    { title: "Sprite", alk: false, url: "./../../../../img/drinks/Sprite.jpg" },
    { title: "Apfelsaftschorle", alk: false, url: "./../../../../img/drinks/Apfelsaftschorle.jpg" }
];

function backNav() {

    window.location.replace('../../story.html');

}

function homeNav() {

    window.location.replace('../../../start/start.html');
     
}


var imgPanorama;

$(document).ready(function () {
   
    imgPanorama = $('.imgHolder');
    var

        divXstart = parseFloat($(imgPanorama).css('width')) * -0.2,
        divYstart = parseFloat($(imgPanorama).css('height')) * -0.3,
        
        backgroundX = divXstart,
        backgroundY = divYstart;
    //backgroundPos = backgroundX + 'px' + ' ' + backgroundY + 'px';
    $('.imgHolder').css('top', backgroundY);
    $('.imgHolder').css('left', backgroundX);

    var borderTop = 0;
    var borderLeft = 0;
    var borderRight = $(window).width();
    var borderBottom = $(window).height();

    var divX1 = borderRight * 0.1;
    var divY1 = borderBottom * 0.1;
    var divX2 = borderRight * 0.9;
    var divY2 = borderBottom * 0.9;

    // hint
    //  mouse on the right background position for x img = 100%
    //  mouse on         the left background position for x img = 0
    //  center background position for x img = 50%

    //  mouse on the top background position for y img = 0
    //  mouse on the bottom background position for y img = 100%
    //  center background position for y img = 50%

    // now if
    //  divX       = 100%
    //  ev.clientX = x%
    //  divY       = 100%
    //  ev.clientY = y%
    // is what we need

    $(imgPanorama).mousemove(function (ev) {

        if ((divX1 > ev.clientX) && (divY1 > ev.clientY) && (backgroundX <= borderLeft && backgroundY <= borderTop)) {
            backgroundX += 10;
            backgroundY += 10;
            backgroundPos = backgroundX + 'px' + ' ' + backgroundY + 'px';
            $('.imgHolder').css('top', backgroundY);
            $('.imgHolder').css('left', backgroundX);
        }


        if((divX2 < ev.clientX) && (divY2 < ev.clientY) ){
            backgroundX -= 10;
            backgroundY -= 10;
            backgroundPos = backgroundX + 'px' + ' ' + backgroundY + 'px';
            $('.imgHolder').css('top', backgroundY);
            $('.imgHolder').css('left', backgroundX);
        }
       
        backgroundPos = backgroundX + '%' + ' ' + backgroundY + '%';
        $('.imgHolder').css('top', backgroundY);
        $('.imgHolder').css('left', backgroundX);

    });
    
});



