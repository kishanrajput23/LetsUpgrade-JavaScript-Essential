# Day 3 Summary :
<img src="https://github.com/kishanrajput23/LetsUpgrade-JavaScript-Essential/blob/main/Day1/Javascript.png" alt="">

**Description of HTML File**
- HTML File:

--> < !DOCTYPE html > specifies that the file is html5 document.\
--> < html  lang = ”en” > defines that everything you are writing in English.\
--> Meta tags give information about your HTML page. It is for browser understanding.

<img src="https://pbs.twimg.com/media/DgNq7gaWsAAryuP.jpg" alt="" height="400">

- We should link javascript file at the end of the body tag using the script element.

<img src="https://www.freecodecamp.org/news/content/images/2019/06/image-132.png" alt="" width="700" height="300">

**Loops**
- Loops are used in javascript to perform repeated tasks based on condition.

**Syntax:**

loop(condition)\
 {\
    //code\
 }

- To use loops there are three keywords available i.e., for, while, do-while.

**while:**

Example

var num = 1;\               
while( num < 5 )\
   {\
    console.log ( num );  //1 2 3 4\
    num = num + 1;\
   }
   
   
**for:**

 Example:       

 var num;\
 for ( num = 1; num < = 10; num++)\
  {\
     console.log ( num );  //1 2 3 4 5 6 7 8 9 10\
   }
   
**do-while:**

Example:   

var num = 1;\
 do {\
     console.log ( num );  //1\
       num = num + 1;\
     }  while ( num > 5 );
     
**pre and post-increment:**

var num = 1;\
var a = num++;  //post increment\
var b = ++ num;  //pre increment\
console.log ( a , num ); // 1 2\
console.log ( a , num );  // 2 2    

**Arrays** : Arrays is a collection of  data of same data type.

**Syntax:**   var variable_name  =  [ ] ;//declaration of array

- An array is used to store the collection of data
- Index number in an array starts from 0.
Example:

var arr = [ 2 , 56 , 65, 1, 6 ];\
console.log ( arr[0] );  //2\
console.log ( arr[2] );  //65

- Array_name.length is used to find the length of the array.
