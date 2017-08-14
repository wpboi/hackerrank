'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
	// Write your code here
    var price = (mealCost+((tipPercent + taxPercent)*(mealCost/100))).toFixed();
    // Use console.log() to print to stdout
    console.log("The total meal cost is "+price+" dollars.");
}    