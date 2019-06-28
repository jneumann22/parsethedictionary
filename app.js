const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: '/Users/Jon/Projects/parsethedictionary/dictionary1.csv',
    header: [
        {id: 'word', title: 'WORD'},
    ]
});

var wordVerification = function(word) {
    regexp = /^[A-Z]/;
    if (word === '') {
        return false;
    }
    if (word === word.toUpperCase()) {
        if (regexp.test(word)){
            return true
        } else {
            return false;
        }
    }
}


var request = require('request');
var fs = require('fs');
var readline = require('readline');
var read_stream = request.get('http://www.gutenberg.org/cache/epub/29765/pg29765.txt')


var rl = readline.createInterface({
    input: read_stream
});


rl.on('line', function(line) {
    rl.pause()
    setTimeout(function () {
        if (wordVerification(line)) {
            let csvObj = [{word : line}]
            csvWriter.writeRecords(csvObj);
            }
    }, 100)
    rl.resume()
    
            
}).on('close', function(){
    rl.close();
})
    




