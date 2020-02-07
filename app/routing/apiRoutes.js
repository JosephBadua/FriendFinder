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
    name: 'Batman',
    photo: 'https://img.cinemablend.com/filter:scale/quill/e/5/c/2/4/9/e5c2494b7fec13181defbc8afe66a7a3bee5bae0.jpg?fw=1200',
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
    photo: 'https://i.ytimg.com/vi/0CI68v_JKBc/maxresdefault.jpg',
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

