function processData(input) {
    
    var arr = input.split("\n");
    var num = arr.splice(0,1);
    var i = 0;
    
    while(num){
        
        var str = [];
        for(var j=0; j<arr[i].length ; j = j+2)
        {
            str.push(arr[i][j]);
        }
        
        str.push(" ");
    
        for(var k=1; k<arr[i].length ; k = k+2)
        {
            str.push(arr[i][k]);
        }
        console.log(str.join(""));
        num--;
        i++;
    }
    
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
