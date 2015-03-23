var choices = [
    { title: "Cappucino", alk: false, url:"" },
    { title: "Kaffee", alk: false, url: "" },
    { title: "Milchkaffee", alk: false, url: "" },
    { title: "Latte Macchiato", alk: false, url: "" },
    { title: "Bier", alk: true, url: "" },
    { title: "Cola", alk: false, url: "" },
    { title: "Fanta", alk: false, url: "" },
    { title: "Sprite", alk: false, url: "" },
    { title: "Apfelsaftschorle", alk: false, url: "" }
];





function gameStart() {
    for (var i = choices.length; i >= 0; i--) {
        var e = $('<div></div>');
        $('.randomBox').append(e);
        e.attr('class', 'choice ' +  i);
    }
}