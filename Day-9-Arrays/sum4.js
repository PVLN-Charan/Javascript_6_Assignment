// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to find the minimum number in the array

// For example, consider the array asarr = [1 2 3 4 5], and the value stored in n = 5

// Then, the required output will be1, as it is the smallest number in the array


//output
//1

function minimumInArray(N,arr){
    //write code here
    var min = arr[0];
    for(var i = 0; i < N; i++){
        if(arr[i] < min)
        {
            min = arr[i]
        } 
    
    }
    console.log(min)
}
var n =5;
var arr =[1,2,3,4,5]
minimumInArray(n,arr)