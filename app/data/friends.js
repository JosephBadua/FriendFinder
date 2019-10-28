var names = [];
var endScores = [];
var picture = [];
$(document).ready(function(){
    $("#submit").on("click", function(event) {
        event.preventDefault();
            let userData = {
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
            let arrayOfStrings = (userData.scores);
            let arrayofNumber = arrayOfStrings.map(Number);
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let finalValue = arrayofNumber.reduce(reducer)
            console.log("End score is " + finalValue)
            // AJAX post the data to the friends API.
            $.post("/api/friends", userData).then(function() {
              });
             $.get("/api/friends").then(function(data) {
              let pastFriends = data
              for (let i = 0; i < pastFriends.length; i++){
                names.push(pastFriends[i].name);
                picture.push(pastFriends[i].photo);
                let scoreStrings = pastFriends[i].scores
                let scoreNumbers = scoreStrings.map(Number);
                let scoreValues = scoreNumbers.reduce(reducer);
                endScores.push(scoreValues);
              }
              endScores.splice(-1,1);
              console.log(endScores);
              console.log(names);
              var close = (closest(endScores,finalValue));
              var closeArray = endScores.indexOf(close);
              var finalName = names[closeArray];
              console.log(finalName);
              var finalPhoto = picture[closeArray];
              console.log(finalPhoto);
              });
    });
});

function closest(array,num){
  var i=0;
  var minDiff=1000;
  var ans;
  for(i in array){
      var m=Math.abs(num-array[i]);
      if(m<minDiff){ 
              minDiff=m; 
              ans=array[i]; 
          }
    }
  return ans;
}