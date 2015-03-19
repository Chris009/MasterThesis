var map = null;

function getMap() {


    // ======================================= Map Boundaries

    var boundingBox = Microsoft.Maps.LocationRect.fromLocations(
        new Microsoft.Maps.Location(49.4950860, 8.4677104),
        new Microsoft.Maps.Location(49.4815931, 8.4517889),
        new Microsoft.Maps.Location(49.4803384, 8.4781389));


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
        //============================== Push Pins    // Retrieve the location of the map center 
    
    var location = new Microsoft.Maps.Location(49.4859215, 8.4643577);
            
    // Add a pin to the center of the map
    var pin = new Microsoft.Maps.Pushpin(location, {text: 'S'}); 

    // Create the infobox for the pushpin
    pinInfobox = new Microsoft.Maps.Infobox(pin.getLocation(), 
        {title: 'Café Sammo', 
            
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

