var map = null;

function getMap() {

    var boundingBox = Microsoft.Maps.LocationRect.fromLocations(
        new Microsoft.Maps.Location(49.4950860, 8.4677104),
        new Microsoft.Maps.Location(49.4815931, 8.4517889),
        new Microsoft.Maps.Location(49.4803384, 8.4781389));




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
    
}