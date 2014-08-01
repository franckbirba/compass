var csv = require('csv');
var fs = require('fs');
var http = require('http');

var output = [];

var input = fs.createReadStream(__dirname+'/pictos.csv');
var md5 = require('MD5');



function getFile(row){
    var url = row.url.replace("http://iconmonstr.com/", "http://s3.iconmonstr.com/");
    var icone = url;
    var iconName = icone.split("http://s3.iconmonstr.com/")[1].replace("/","")
    icone = "iconmonstr-"+iconName+".svg";
    var OPTIONS = "?AWSAccessKeyId=AKIAIL7HZMI4TIRA6IDA&Expires=1437916403&Signature="+md5(url);
    console.log("http://s3.iconmonstr.com/"+icone+OPTIONS);
    
    var file = fs.createWriteStream(__dirname+"/download/"+icone);
    var request = http.get("http://s3.iconmonstr.com/"+icone+OPTIONS, function(response) {
      response.pipe(file);
    });
}

var parser = csv.parse({delimiter: ';', columns: true}, function(err, data){
    for (row in data){
        getFile(data[row]);
    }
});

input.pipe(parser).pipe(process.stdout);

// fs.readFile(__dirname+'/pictos.csv', {encoding:'utf8'}, function (err, data) {
//   if (err) throw err;
//   startParse(data);
// });
//
// function startParse(data){
//     console.log(data);
//     parser = csv.parse(data,{delimiter: ';'});
//     console.log(parser.read());
//     /*while(record = parser.read()){
//         console.log(record);
//       output.push(record);
//     }*/
//
//     parser.on('readable', function(){
//         console.log('hello');
//       while(record = parser.read()){
//           console.log(record);
//         output.push(record);
//       }
//     });
//
//     // Catch any error
//     parser.on('error', function(err){
//       console.log("ERROR",err.message);
//     });
//     // When we are done, test that the parsed output matched what expected
//     parser.on('finish', function(){
//      console.log('done', output);
//     });
//
//     parser.end();
// }

