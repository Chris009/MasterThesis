var patients = [
    { name: "patient13", username: "CoolUserName1", score: "10", avgTime: "" },
    { name: "patient22", username: "CoolUserName1", score: "9", avgTime: "" },
    { name: "patient35", username: "CoolUserName1", score: "82", avgTime: "" },
    { name: "patient43", username: "CoolUserName1", score: "74", avgTime: "" },
    { name: "patient54", username: "CoolUserName1", score: "6", avgTime: "" },
    { name: "patient6", username: "CoolUserName1", score: "51", avgTime: "" },
    { name: "patient7w", username: "CoolUserName1", score: "4", avgTime: "" },
    { name: "patient8", username: "CoolUserName1", score: "32", avgTime: "" },
    { name: "patient9", username: "CoolUserName1", score: "2", avgTime: "" },
    { name: "patient10", username: "CoolUserName1", score: "1", avgTime: "" }
];

$(document).ready(function () {

    //sort patients array
    

    patients.sort(function (a, b) {
        return a.score - b.score;
    });
    
    for (var i = patients.length - 1; i >= 0; i--) {

        var $row = $('<tr>' +
      '<td>' + patients[i].username + '</td>' +
      '<td>' + patients[i].score + '</td>' +
      
      '</tr>');
        if (patients.Type == 'Error') {
            $row.append('<td>' + 'error' + '</td>');
        }
        $('.score').append($row);

    }
});



