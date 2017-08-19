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

function timeConversion(s) {
    // Complete this function
    if(s[8]=='P') {
        if(s[0]==1&&s[1]==2) {
            return (s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]);
        }
        else {
            var a = String(Number(s[0])+1); var b = String(Number(s[1])+2);
            //console.log(a+b);
            return (a+b+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]);
        }    
    }
    else {
        if(s[0]==1&&s[1]==2) 
            return ("0"+"0"+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]);
        else
            return (s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7]);
        }
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}
