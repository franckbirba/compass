var csv = require('csv');
var fs = require('fs');

csv()
.from.stream(fs.createReadStream(__dirname+'/buildings.csv'))
.to.stream(fs.createWriteStream(__dirname+'/sample.out'))
.transform( function(row){
  row.unshift(row.pop());
  return row;
})
.on('record', function(row,index){
	/*var tmpDate = new Date();
	var people = {
		firstName: row[3].latinise().toLowerCase(),
		lastName: row[4].latinise().toLowerCase(),
		name: row[3].latinise().toLowerCase() + " " + row[4].latinise().toLowerCase(),
		provider: "enetpulse",
		providerId: Number(row[2]),
		date: tmpDate.getTime(),
		lastUpdate: tmpDate.getTime(),
		keywords: row[0].split(', '),
		twitter: row[6].length > 0 ? row[6].split(', ') : [],
		instagram: row[7].length > 0 ? row[7].split(', ') : [],
		enetpulse: {
			atpRank: Number(row[1])
		}
	};*/
	//_peoples++;
  //console.log('#'+index+' '+JSON.stringify(row));
})
.on('close', function(count){
  // when writing to a file, use the 'close' event
  // the 'end' event may fire before the file has been written
   console.log('Number of lines: '+count);
   GlobalCount = count;
})
.on('error', function(error){
  console.log(error.message);
});