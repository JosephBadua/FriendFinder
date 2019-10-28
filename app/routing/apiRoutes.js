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
    },
    { 
    name: 'Batman',
    photo: 'https://upload.wikimedia.org/wikipedia/en/8/87/Batman_DC_Comics.png',
    scores: [ 
    '1', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1', 
    '2' 
        ] 
    },
    { 
    name: 'Sauron',
    photo: 'https://vignette.wikia.nocookie.net/middleearthshadowofmordor7723/images/6/64/SauronTheBrightLordMissionImage.jpg/revision/latest/scale-to-width-down/1000?cb=20180326151346',
    scores: [ 
    '3', 
    '3', 
    '3', 
    '3', 
    '3', 
    '3', 
    '3', 
    '3', 
    '3', 
    '2' 
        ] 
    }
]
  
var api = JSON.stringify(friends);

exports.friends = friends
exports.api = api

