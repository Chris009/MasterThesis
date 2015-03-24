
var map = null;




function homeNav() {
   
    window.location.replace('../start/start.html');
  
}



function sammoNav() {
   
    window.location.replace('Games/SammoGame/sammo.html');
  
}



function getMap() {


    // ======================================= Map Boundaries

    var boundingBox = Microsoft.Maps.LocationRect.fromLocations(
        new Microsoft.Maps.Location(49.4941772, 8.4666827),
        new Microsoft.Maps.Location(49.4811188, 8.4551811),
        new Microsoft.Maps.Location(49.4800314, 8.4778404));


//=================================Initialize Map

    map = new Microsoft.Maps.Map(document.getElementById('myMap'),
        {
            credentials: 'AmOYkj23cBi5fjt-GV5v_oEAGYzsPYFUwoqrvSPmXlXhRpIfuhBZHPY4sMTVrKoU',
            showDashboard: false,
            showMapTypeSelector: false,
            showScalebar: false,
            disableZooming: true,
            bounds: boundingBox,
            mapTypeId: Microsoft.Maps.MapTypeId.road
        });
    
    //============================== Push Pins
    // Retrieve the location of the map center 
    
    var locationSammo = new Microsoft.Maps.Location(49.4859215, 8.4643577);
    var pinOptions = {
        width: null, height: null,
        htmlContent: "<div class='pushpin'>Café Sammo</div>"
    };
    // Add a pin to the center of the map
    var pin = new Microsoft.Maps.Pushpin(locationSammo, pinOptions); 

    // Create the infobox for the pushpin
    pinInfobox = new Microsoft.Maps.Infobox(pin.getLocation(), 
        {title: 'Café Sammo', 
        description:'Infobox description', actions:[{label: 'GoTo Game', eventHandler: sammoNav}],
            visible: false, 
            });



    // Add handler for the pushpin click event.
    Microsoft.Maps.Events.addHandler(pin, 'click', displayInfobox);

    // Hide the infobox when the map is moved.
    Microsoft.Maps.Events.addHandler(map, 'viewchange', hideInfobox);


    // Add the pushpin and infobox to the map
    map.entities.push(pin);
    map.entities.push(pinInfobox);


    


}

function displayInfobox(e)
{
    pinInfobox.setOptions({ visible:true });
}                    

function hideInfobox(e)
{
    pinInfobox.setOptions({ visible: false });
}



