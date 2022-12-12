// Description

// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr

// You have to print all the characters in the string, which are present at even indexes

// For example, consider the string stored instr = "saikiran", and the value stored inN = 6, then the output will be

// s
// i
// i
// a

// The characters stored at odd positions aren - index 0,u - index 2,l - index 4, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

// output
// s
// i
// i
// a




function charAtEvenPos(N,str) {
    //write code here
    for(var i = 0; i < N; i++ ){
        if(i % 2 == 0 ){
            console.log(str[i])
        }
    }
    
}

var a = 8;
var str = "saikiran"
charAtEvenPos(a,str)