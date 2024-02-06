var path = require("path");

var path = require("path");
// Normalization  
console.log('normalization : ' + path.normalize('some path to normalize'));
// Join  
console.log('joint path : ' + path.join('/text', 'path-1', 'path-2'));
// Resolve  
console.log('resolve : ' + path.resolve('text_path_example.js'));
// Extension   
console.log('ext name: ' + path.extname('text_path_example.js'));    


