// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to printtrue, if the string contains at least one vowel, otherwise printfalse

// For example, consider the value stored in N = 6, and the value stored instr = "saikiran", then the output will be true, since the string contains the vowelutwice

// Note : The string only contains lowercase English alphabets

// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

//output

//false

function checkVowel(N, str) {
    //write code here
    var vowel = ['a','e','i','o','u']
    for(var i = 0; i < N; i++ ){
      for(var j=0; i< vowel.length;j++){
        if((str[i] != vowel[j])){
          return false;
        }
        else{
          return true
        }

      }
      
    }
    
  }
  
  var n = 5;
  var str = "stvra"
   
  console.log(checkVowel(n,str))
