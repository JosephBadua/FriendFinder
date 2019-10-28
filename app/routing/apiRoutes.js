var friends = [ 
    { 
    name: 'Clark Kent',
    photo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Superman_and_Clark_Kent.jpg',
    scores: [ 
    '4', 
    '4', 
    '4', 
    '2', 
    '2', 
    '5', 
    '5', 
    '4', 
    '3', 
    '2' 
        ] 
    },
    { 
    name: 'Ronald McDonald',
    photo: 'https://vignette.wikia.nocookie.net/ronaldmcdonald/images/0/0a/Original2.jpg/revision/latest?cb=20180909053442',
    scores: [ 
    '4', 
    '4', 
    '2', 
    '2', 
    '5', 
    '5', 
    '1', 
    '1', 
    '2', 
    '2' 
        ] 
    }
]
  
var api = JSON.stringify(friends);

exports.friends = friends
exports.api = api
