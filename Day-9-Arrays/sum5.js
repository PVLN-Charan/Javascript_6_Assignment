// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print only the even elements in the array.

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the required output will be

// 2
// 4
// The above are the only two even numbers in the given array


//output
//2
//4

function evenArray(n, arr){
    //write code here
    for(var i = 0; i < n; i++){
        if(arr[i]%2 == 0){
            console.log(arr[i])
        }
    }
}

var n = 5;
var arr = [1, 2, 3, 4, 5];
evenArray(n,arr)