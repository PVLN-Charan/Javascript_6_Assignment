// Description

// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to traverse the array, and print each element on a new line

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 1
// 2
// 3
// 4
// 5

//output 
// 1
// 2
// 3
// 4
// 5


function printArray(N,arr){
    //write code here
    //console.log(N, arr)
    for(var i = 0; i <= N-1; i++){
        console.log(arr[i])
    }
}

var n = 5;
var arr = [1,2,3,4,5];


printArray(n,arr)