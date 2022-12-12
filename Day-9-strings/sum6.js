// Vowel & Consonant Count Ended
// Description

// You are given a string, stored in a variable with the name,str

// The size of the string is stored in another variable with the nameN

// You have to find the count of vowels, and consonants in the string, and print it

// For example, consider the value stored instr = "saikira", and the value stored in N = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

// 4 4
// Note : All characters in the string are lowercase English alphabets

// Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

//output
//4 4


function vowelAndConsonantCount(N, str) {
    //write code here
    var v = 0, c = 0;
    for(i = 0; i < N; i++){
      if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        v++
      }
      else{
        c++
      }
    }
    console.log(v,"\t",c)
    
  }

  var n = 8;
  var str =  "saikiran";
  vowelAndConsonantCount(n,str)