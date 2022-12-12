// Description

// You are given a string, whose size is stored in a variable with the nameN

// You have to print all the characters in the string in reverse order, on a new line

// For example, consider the string stored instr = "saikiran", and the value stored in N = 8, then the required output will be

// n
// a
// r
// i
// k
// i
// a
// s


//output
// n
// a
// r
// i
// k
// i
// a
// s

function printCharReverse(N,str) {
    //write code here
    for(var i = N-1; i >= 0; i--){
        console.log(str[i])
    }

}

var n = 8;
var str = "saikiran"
printCharReverse(n,str)