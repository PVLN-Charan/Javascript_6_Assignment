// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the maximum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be5, as it is the largest number in the array

//output
//5


function maximumInArray(N,arr){
    //write code here
    var n = 0;
    for(var i = 0; i < N; i++){        
        for(var j = i+1; j < N; j++){
            if (arr[j] > arr[i]) {
                n = arr[j];
            }
        }
    }
    console.log(n)
}
var n = 5;
var arr = [1,2,3,4,5];

maximumInArray(n,arr)