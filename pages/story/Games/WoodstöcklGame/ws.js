

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

var j = 0;
function gameStart() {
    for (var i = choices.length; i >= 1; i--) {
        var choice = choices[Math.floor(Math.random() * choices.length)];

        choices.splice($.inArray(choice, choices), 1);

        var URL = choice.url;
        var e = $('<img></img>');
        e.attr('class', 'choice ' + i);
        e.attr('src', URL);
      
        $('.randomBox').append(e);
        


    }
}

function openDoor() {
    $('.door').addClass('hidden');
    $('.img1').addClass('hidden');

    $('.order').removeClass('hidden');
    $('.img2').removeClass('hidden');
}

function startOrder() {
    $('.order').addClass('hidden');
    $('.img2').addClass('hidden');

    $('.randomBox').removeClass('hidden');
    gameStart()
}

(function () {
    var
        div = $('.imgHolder'),
        divX = div.width(),
        divY = div.height(),
        backgroundX, backgroundY, backgroundPos;


    // hint
    //  mouse on the right background position for x img = 100%
    //  mouse on the left background position for x img = 0
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

    $(div).mousemove(function (ev) {

        backgroundX = 1 / divX * ev.clientX * 100;
        backgroundY = 1 / divY * ev.clientY * 100;
        backgroundPos = backgroundX + '%' + ' ' + backgroundY + '%';
        div.css('background-position', backgroundPos);

    });
})();