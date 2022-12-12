// Description

// You are given a string, whose size is stored in a variable with the name N

// The string itself is stored in a variable with the name,str

// Print all the characters, stored instr, on a new line

// For example, if the value stored inN = 7, and the string isstr = "yuvaraj", then the required output will be

// y
// u
// v
// a
// r
// a
// j



function printChar(N,str) {
    //write code here
    for(var i = 0; i < N; i++){
        console.log(str[i])
    }
}

var n = 8;
var str = "saikiran"
printChar(n,str)