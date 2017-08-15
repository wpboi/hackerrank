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

function super_reduced_string(s){
    // Complete this function
    
    var len = s.length;
    var st = [];
    st.push(s[0]);
    
    for(var i = 1;i<len;i++)
        {
            if(st[st.length-1]!=s[i])
                st.push(s[i]);
            else
                st.pop();
        }
    if(st.length==0)
        return "Empty String";
    else
        return st.join("");
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}