function reverse(s) {
  return s.split('').reverse().join('');
};

======================================================

function factorial(n) {

    var x = n-1;
    var result = n;

    while (x > 0) {
      result = result * x;
      x--;
    };

  return result;
}

======================================================

function factorial2 (n) {
  if (n === 0) return 1;
  return n * factorial2(n - 1);
}

======================================================

function sum (x,y) {

  var z = x + y;

  return z;
}

======================================================

function longestword(string) {
    var str = string.split(' ');
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

======================================================

function num(n) {

  var x = n
  var y = 0
  

  while (y < n) {
    x += y;
    y++;
  };

  return x;
}

======================================================

function time_conversion(x) {

  var minutes = x;
  var hours = (minutes/60) - ((minutes % 60)/60);
  var remainder = minutes % 60;

  if (remainder < 10) {
    return hours + ":" + "0" + remainder;
  };

 return hours + ":" + remainder;

}

======================================================

function count_vowels(string) {

  var str = string.match(/[a,e,i,o,u]/g);

  return str.length;

}

======================================================

function palindrome(string) {

  var str = string;
  var strRev = string.split('').reverse().join('');


  if (str == strRev) {
    return true
  }

  else if (str !== strRev) {
    return false
  };

}
 

======================================================



function nearby_az(string) {

  var aye = string.indexOf('a');
  var zee = string.indexOf('z');
  var difference = (zee - aye);

  while (difference >= 1 && difference <= 3) {
    return true;
  }

 if (difference <= 1) {
    return false;
  }

  else if (difference > 3) {
    return false;
  };

}


======================================================



//this code kinda works

function two_sums(nums) {



for (var x = 0, y = x + 1; (x < nums.length) && (y < nums.length); y++, x++) {


  if (nums[x] + nums[y] == 0) {
    return (x + "," + y);
  };

};

  return "nil";
}


============

function two_sums (nums) {

var x = 0;
var y = x+1;

  while (var x = 0 && y < nums.length) {


    if (nums[x] + nums [y] == 0) {
      return (x + "," + y);
      y++;
    }

    while (x < nums.length) {


      if (nums[x] + nums [y] == 0) {
        return (x + "," + y);
        x++;
      }

    }
    };
return "nil";
}


====================



function two_sums(nums) {



for (var x = 0, y = x + 1; (x < nums.length) && (y < nums.length); y++, x++) {


  if (nums[x] + nums[y] == 0) {
    return (x + "," + y);
  };

};

  return "nil";
}


================


function two_sums(nums) {


for (var x = 0; x < nums.length; x++) {

  var y = x+1;

  while (y < nums.length) {
    if (nums[x] + nums[y] == 0) {
      return (x + "," + y);
    };
    y++;
  };
};
return "nil";
}

==========================


function two_sums(nums) {
  var x = 0;
    while (x < nums.length) {
      var y = x+1;

      while (y < nums.length) {
        if (nums[x] + nums [y] == 0) {
          return (x + "," + y);
        };
        y++;
      };
      x++;
    };
    return "nil";
  }

===============


function is_power_of_two (num) {


 for (var i = -1; i < num; i++) {


    if (i*i == num) {
        return true;
    };
 };
 return false;
}


===============
function is_power_of_two (num) {

  var i = -1;

  while (i < num) {

    if (i*i == num){
      return true;
    };
    i++;
  };
  return false;
}


=================

function third_greatest(nums) {

  nums.sort();

  return nums[nums.length-3];

}

=================

function most_common_letter(string) {

  string.split();





}




==================

function dasherize_number(num) {

  var x = num;

  for (i = 0; i < x.length; i++) {

    if ((x[i] % 2) != 0) {
      return "-" + num[i] + ;
    }

    else if ((x[i] % 2) == 0) {
      return num[i] + ;
    };
  };
}

===============

function capitalize_words(string) {

var str = string.split(' ');

  for (i = 0; i < str.length; i++) {
    str[0].Uppercase();
    
    return Uppercase().join('');
  };
  };
}


// break down sentence in array of words
var arr = string.split(' ');
// loop through array
  for (var i = 0; i < arr.length; i++) {
    // target first letter of word + uppercase
    var oldLetter = arr[i].charAt(0);
    var letter = arr[i].charAt(0).toUpperCase();
    var word = arr[i].string.prototype.replace(oldLetter, letter);
    var sentence = sentence + word;
  };
// join words together and return it  
return sentence;


function capitalize_words(string) {
  var arr = string.split(' ');
  var storage = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    storage.push(word);
  };
  return storage.join(' ');
}

=======================

function dasherize_number(num) {

var x = num;
var str = x.toString().split('');
var storage = [];

for (var i = 0; i < str.length; i++) {

  if (str[i] % 2 != 0) {
    storage.push("-" + str[i]);
  }
  else (str[i] % 2 == 0) {
    storage.push(str[i]);
  };
};
return storage.join('');
}

========================
function scrambleString(x, y) {
  var str = x.split('');
  var storage = [];
  var storage2 = []
  for (var i = 0; i < str.length; i++) {
    var middle = y[i] + x[i];
    storage.push(middle);
    storage.sort();
  };
  for (var i = 0; i < str.length; i++) {
    var end = storage[i].slice(1);
    storage2.push(end);
  }
  return storage2.join('');
}

function scramble(string, posArr) {
  var scrambled = '';

  for (var i = 0; i < posArr.length; i++) {
    scrambled += string[posArr[i]]
  }

  posArr.forEach(function (i) {
    scrambled += string.charAt(i);
  });

  return scrambled;
}

===============

function isPrime(number) {
var x = number
var y = 1
while (y < x) {
   if (x % y == 0) {
    return false
   }
   else (x % y !=0) {
    return true
   };
   y++;
  };
}

//this code works
function isPrime(num) {
  if (num === 2) return true;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else if (num % i != 0) {
      return true;
    }
  }
}

============================


function nthPrime (num) {

  var number = 2;
  var nth = [];
  while (nth.indexOf(number) <= num) {
    for (var i = 2; i < number; i++) {
      var test = number % i;
      if (test != 0) {
        nth.push(number);
        number++;
      }
      else if (test == 0) {
        number++;
      }
      else if (nth.indexOf(number) = num) {
        break;
      };
    };
  console.log(nth.charAt(num));
  };
}

// input number
  // test numbers to see if they are primes
    // push prime numbers into array
  // test array for the index of input number 


function nthPrime(num) {
  var nth = [];

  if (num === 2) return true;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else if (num % i != 0) {
      return true;
    }
  }
}


function nthPrime (num) {

  var number = 2;
  var nth = [];
  while (nth.indexOf(number) <= num) {
    while (var i = 2; i < number){
      var test = number % i;
      if (test != 0) {
        nth.push(number);
      };
    number++;
    }
      else if (nth.indexOf(number) = num) {
        break;
      };
    };
  console.log(nth.charAt(num));
  };
}


function nthPrime(num) {
  var nth = [];

  while (nth.length <= num) {
    var number = 3;
      for (var i = 2; i < number; i++) {
        if (number % i != 0) {
          nth.push(number);
          number++;
        };
    };
  };
  return nth.charAt(num);
}


=========================

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else if (num % i != 0) {
      return true;
    }
  }
}


function nthPrime(number) {
  // array
  var nth = [];
  // starting num to test
  var num = 1;
  // while nth count is less than or equal to input number
  console.log('huh, ');

  while (nth.lengh < number) {
    console.log('inside loop');
    // if the num being tested is a prime
    if (isPrime(num) === true) {
      // add num to array
      console.log('added: ', num);
      nth.push(num);
    } else {
      console.log('error');
    }

    // // if the num being tested is not a prime
    // else if (isPrime(num) === false) {
    //   // go out of this loop and test the next number
    //   break;
    // };
    // next number to test, go back to testing if this is a prime  
    num++;  
  };
  return nth.pop(); // last would be equal to number - 1
}



==========
function nthPrime(number) {
  var counter = 1;
  var num = 1;
  while (counter <= number) {
    num++;  
    if (isPrime(num) == true) {
      counter++
    }    
  }
  return num; 
}


function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    } else if (num % i != 0) {
      return true;
    }
  }
}
======================

function longestPalindrome(string) {
...
...
...   var len = string.length;
...   var subs = string.substring(string[i], string[len-1]);
...
...   for (var i = 0; i < string.length; i++) {
...
...     if (string == string.split('').reverse().join('')) {
...       return string;
...     }
...
...     else if (subs == subs.split('').reverse().join('')) {
...       return (string - string[i]);
...     };
...
...     return false;
...   };
... }

=======================

// this one works

function longestPalindrome(string) {
  var storage = [];
  var highest = '';
  var x = 0;

  if (string == string.split('').reverse().join('')) {
    return string;
  }

  while (x < string.length) {
    var y = x + 1;
    while (y <= string.length) {
      var subs = string.substring(x,y);
      var test = subs.split('').reverse().join('');
      if (subs == test) {
        storage.push(subs);
      };
      y++;
    }
    x++;  
  }

  for (var i = 0; i < storage.length; i++) {
    if (storage[i].length >= highest.length) {
      highest = storage[i];
    }
  }
  return highest;
}


========================

function isPalindrome(string) {
  var i = 0;
  while (i < string.length) {
    if (string[i] == string[(string.length - 1) - i]) {
      return true;
    };
    i++;
  };
  return false;
}

function longestPalindrome(string) {
  for (var i = 0; i < string.length; i++) {
    if (isPalindrome(string) == true) {
      return (string.substring(string[i], [(string.length - 1) - i]);
    }
    else {
      return false;
    };
  }; 
}

======================
function greatestCommonFactor(x,y) {
  var max = max(y, x);
  var min = min(y, x);

  while (min > 0) {
    if (max % min == 0 && min % min == 0) {
      return min;
    };
    min--;
  }
}  
======================

function numRepeats(string) {
  var x = 0;
  var answer = 0;
  while (x < string.length) {
    var i = x + 1;
    string.split('').sort().join('');
      while (i < string.length) {
        if (string[x] == string [i]) {
          answer++;
          break;
        }
        i++;
      }
    x++;  
  }
  return answer;
}

======================

function numRepeats(string) {
  var x = 0;
  var str1 = [];
  var str2 = [];

  while (x < string.length) {
    var y = x + 1;
    while (y < string.length) {
      if (string[x] == string[y]) {
        str1.push(string[x]);
      }
      y++;
    }
    x++;
  }
  str1.sort();

  for (var i = 0; i < str1.length; i++) {
    if (str1[i] != str1[i + 1]) {
      str2.push(str1[i]);
    }
  }
  return str2.length;
}

================
function longestWord(sen) { 

  var store = sen.split(' ');
  var longest = 0;
  var word = null;

  for (var i = 0; i < store.length; i++) {
    if (longest < store[i].length) {
      longest = store[i].length;
      word = store[i];
    }
  }  
  return word; 
         
}
====================
function SimpleSymbols(str) { 

  for (var i = 0; i < str.length; i++) {
  if (str[i] == str.match([/a-z/i]) && str[i - 1] == "+" && str[i + 1]) {
      return true;
    }
    else {
      return false;
    }
  }      
}

}
================================
function ABCheck(str) { 

  var aye = str.indexOf('a');
  var bee = str.indexOf('b');
  var stor = [];
  for (var i = 0; i < str.length; i++) {
    if ((str[i] == 'a') && (bee - i == 4)) {
        stor.push(str[i]);
        }
  }

  if (stor.length >= 1) {
    return "true";
  }
  else {
    return "false";
  }
}  


===============================
function ExOh(str) { 

  var storeX = [];
  var storeO = [];

  for (var i = 0; i < str.length; i++) {
    
  
    if (str[i] == 'x') {
    storeX.push(str[i]);
    }
    else if (str[i] == 'o') {
      storeO.push(str[i]);
    }
  }
  
return storeX.length + " " + storeO.length;
         
}
=============================

function ArithGeo(arr) { 

  var storeGe = [];
  var storeAr = [];
  
  for (var i = 0; i < arr.length - 1; i++) {
    var geTest = arr[i + 1]/ arr[i];
    var arTest = arr[i + 1] - arr[i];
    storeGe.push(geTest);
    storeAr.push(arTest);
  }
  
  if (storeAr[storeAr.length - 1] == storeAr[storeAr.length - 2]) {
    return "Arithmetic";
  }
  else if (storeGe[storeGe.length - 1] == storeGe[storeGe.length - 2]) {
    return "Geometric";
  }
  else {
    return "-1";
  }

}


============================
function BinaryConverter(str) { 
 var rev = str.split('').reverse().join('');
 var num = 0;
  for (var i = 0; i < str.length; i++) {
    if (rev[i] == 1) {
      num += Math.pow(2, i);
    }
    else if (rev[i] == 0) {
      num += 0;
    }  
  }  
  return num;  
}
==========================
function BinaryConverter(str) {
  var num = 0;
  for (var i = str.length - 1; i > 0; i--) {
    if (str[i] == 1) {
      num += Math.pow(2, i);
    }
    else if (str[i] == 0) {
      num += 0;
    }
  }
return num;
}



============================
function SimpleMode(arr) { 
 var store = []; 

  for (var x = 0; x < arr.length; x++){
    var y = x + 1; 
    var count = 0;
    while (y < arr.length) {
      if (arr[x] == arr[y]) {
        count ++;
      }
    y++;  
    }
  store.push(count);
  }
 return store;
}  

============================
function SimpleMode(arr) {
  var num = 0;
  var most = 0;
  for (var x = 0; x < arr.length; x++) {
    var y = x + 1;
    var count = 0;
      while (y < arr.length) {
        if (arr[x] == arr[y]) {
          count++;
        }
      y++;
      }
    if (count > most) {
      most = count;
      num = arr[x];
      }
    else if (num == 0) {
      return "-1";
      }
    }                
  return num;
}


=========================


function additivePersistence(num) {
  var spli = num.toString().split('');
  var count = 0;
  while (spli.length > 1) {
    var test = 0;
      for (var i = 0; i < spli.length; i++) {
        test += parseInt(spli[i]);
      }
    count++;
    spli = test.toString().split('');
  }
return count;
}

===========================

function multiplicativePersistence(num) {
  var spli = num.toString().split('');
  var count = 0;
  while (spli.length > 1) {
    var test = 1;
      for (var i = 0; i < spli.length; i++) {
        test *= parseInt(spli[i]);
      }
    count++;
    spli = test.toString().split('');
  }
return count;
}

=====================
function DivisionStringfield(num1, num2) {
  var test = Math.round(num1/ num2);
  var ran = test.toString().split('').reverse();
  var store = [];
  for (var i = 0; i < ran.length; i++) {
    store.push(ran[i]);

    if ((i + 1) % 3 == 0 && i != ran.length - 1) {
      store.push(',');
    }
  }  
 return store.reverse().join('');
}


=============================
function MeanMode(arr) { 

var testMean = 0;
var mode = 0;
var y;
var x;
var count;

for (var i = 0; i < arr.length; i++) {
  testMean += arr[i];
}
  
var mean = testMean/(arr.length);

for (var x = 0; x < arr.length; x++) {   
  var y = x + 1;
  var count = 0;
  while (y < arr.length) {
    if (arr[x] == arr[y]) {
      count += 1;
    }
    y++;  
  }       
  if (count > mode) {
    mode = arr[x];
  }       
}  

if (mean == mode) {
  return 1;
}
else {
  return 0;
}
=============================
function SwapCase(str) { 
var store = [];
for (var i = 0; i < str.length; i++) {
  if (str[i] == str[i].toUpperCase()) {
    store.push(str[i].toLowerCase());
  }
  else {
    store.push(str[i].toUpperCase());
  }
}
  return store.join('');
}

===========================
function PowersofTwo(num) { 

for (var i = 0; i < num; i++) {
  if (Math.pow(2, i) == num) {
    return true;
  }
}
  return false; 
}