$(document).ready(function(){
  
    $("#submit").on("click", function(event) {
        event.preventDefault();
            var userData = {
              name: $("#name").val(),
              photo: $("#photo").val(),
              scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
              ]
            };
            var arrayOfStrings = (userData.scores);
            var arrayofNumber = arrayOfStrings.map(Number);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            console.log(arrayofNumber.reduce(reducer));
            // AJAX post the data to the friends API.
            $.post("/api/friends", userData).then(function() {
              console.log("done");
              console.log(userData);
              });

    });
});