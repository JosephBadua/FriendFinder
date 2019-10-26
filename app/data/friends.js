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
            alert(userData)
    
            // AJAX post the data to the friends API.
            $.post("/api/friends", userData).then(function(data) {
              console.log(data.name)
                alert("User added");
              });

    });
});