// displays all numbers from database

// this line is for testing purposes
//console.log(92);
var url = "http://localhost:3000/all";

var first = document.getElementById("first");
var second = document.getElementById("second");
$.getJSON(url, (numbers, status) => {
    console.log(numbers);
    // check object keys, console.log
    //Object.keys(numbers)
    arrayLength = numbers.length;
    //first.append( numbers[0].first);
    //second.append(numbers[0].second);
    for(i=0;i<arrayLength;i++) {
	if(numbers[i].first){
	    first.append(numbers[i].first + "\n");
	    second.append(numbers[i].second + "\n");
	    
	}
    }
});
