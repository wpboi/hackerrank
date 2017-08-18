process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function fact(num) {
    
    var result = new Array(500);
    var res_size = 1;
    result[0] = 1;
    
    for(var i = 2 ; i <= num ; i++) {
        res_size = multiply(result,res_size,i);
    }
    var str = [];
    for(var k = res_size - 1; k>=0 ; k--) {
            str.push(result[k]);
    }
    console.log(str.join(""))
}

function multiply(result,res_size,i) {
    
    var carry = 0;
    
    for(var j = 0 ; j < res_size ; j++) {
        
        var prod = result[j]*i + carry;
        result[j] = prod % 10;
        carry = Math.floor(prod / 10);
    }
    
    while(carry) {
        
        result[res_size] = carry % 10;
        carry = Math.floor(carry / 10);
        res_size++;
    }
    return res_size;
    
}

function main() {
    var n = parseInt(readLine());
    fact(n);
}
