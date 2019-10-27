var friends = [ 
    { 
    name: 'j',
    photo: 'j',
    scores: [ 
    '1', 
    '1', 
    '1', 
    '1', 
    '5', 
    '1', 
    '1', 
    '1', 
    '1', 
    '1' 
        ] 
    },
    { 
    name: 'jos',
    photo: 'jos',
    scores: [ 
    '4', 
    '3', 
    '2', 
    '4', 
    '5', 
    '1', 
    '5', 
    '4', 
    '1', 
    '2' 
        ] 
    }
]
  
var api = JSON.stringify(friends);

exports.friends = friends
exports.api = api
