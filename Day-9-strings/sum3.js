// Description

// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr

// You have to print all the characters in the string, which are present at odd indexes

// For example, consider the string stored instr = "saikiran", and the value stored inN = 8, then the output will be

// a
// p
// l
// The characters stored at odd positions arer - index 1,p - index 3,l - index 5, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0

//output

// a
// k
// r
// n

function charAtOddPos(N,str) {
    //write code here
    for(var i = 0; i < N; i++ ){
        if(i % 2 == 1 ){
            console.log(str[i])
        }
    }
    
}


var n = 8;
var str = "saikiran"
charAtOddPos(n,str)