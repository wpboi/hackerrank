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

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var sum = arr.reduce(add,0);
    
    min = sum;
    max = 0;
    
    function add(a,b)
    {
        return a+b;
    }
    
    for(var i=0; i<5 ;i++)
        {
         if(sum-arr[i]<=min)
             min = sum-arr[i];
         
         if(sum-arr[i]>max)
             max = sum-arr[i];
        }
    console.log(min+" "+max);
}
