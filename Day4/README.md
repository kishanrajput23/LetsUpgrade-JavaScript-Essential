# Day 4 Summary:

<img src="https://github.com/kishanrajput23/LetsUpgrade-JavaScript-Essential/blob/main/Day1/Javascript.png" alt="">

**Inbuilt functions in js:**

**alert():** 

- It displays a message in the dialog box that pops up on the screen.

Example: 

**alert ( “Hello” );**
<img src="https://t-images.imgix.net/https%3A%2F%2Flh5.googleusercontent.com%2FMIqLha8vPO3n8dit3LFE1XlOfGmr_msFyMKNO_uMaZ7cEAbz44ZabCb0ixB-etqMoKk4gVISe3fHpFMTnJSsAYhT_jQxEIuSqoZs2KMlORIRuUkliM45FH00RZVuSv577lwBgfE?width=1240&w=1240&auto=format%2Ccompress&ixlib=js-2.3.1&s=aeb51105ca739bde5bcfac6fcce24924" alt="">

**confirm():**

- Confirm display two options like ok or cancel in the display box that pops up on the screen.
- If we select ok it returns true otherwise it returns false.

Example:        

**confirm ( “Are you sure? “ );**
<img src="https://t-images.imgix.net/https%3A%2F%2Flh3.googleusercontent.com%2FG9RRl8IH1yC2P-lL2vzCJLUL0sop343N6ejoHoKJe_eXxs2iBiXq4_P1CKzuD7PoeMqc_K_YKq52yORxwUz1IK1XL4h3UdSB9hJ09SgBxOj8CpB1icSoR2NbVgsc7xAcy1sT9zQ?width=1240&w=1240&auto=format%2Ccompress&ixlib=js-2.3.1&s=074cf281a8005f80bfec6a0c1ce466ad" alt="">

**Objects**

- The object is a collection of properties and functions.
- Object helps to store, use and arrange the data properly.
- The window is the inbuilt parent object of all the properties and functions.

Example :

window.alert();\
window.location = “ url ”;

- we can also create our own object.

var object_name ={\
  				property_name1 : value1,\
				property_name2 : value2,\
				………….\
				} ;
        
 Example:

var user ={\
          Name : "ironman",\
 		  age : 34,\
 		 powers : ["armour","intelligence","rich"], //array inside the object\
          };\
console.log ( user.name ) //ironman\
console.log ( user.age ) //34\
console.log ( user.power[1] ); //intelligence

- Objects can have objects inside them.

Example:

var user ={\
			Name : "ironman",\
 			age : 34,\
 			powers : ["armour","intelligence","rich"], //array inside the object\
 		 };\
 		 address : {\
                     city : “ Mumbai ”,\
					 pincode : “ 1234 ” ,\
                    }\
         };\
console.log ( user.address.city ); //Mumbai

**DOM Manipulation**
- DOM is the tree structure of the HTML document. The browser understands the tree structure and provides us the output.
- Js helps to manipulate the DOM tree.
- The document is the object that refers to the webpage.
- We can fetch the elements from HTML file using document object.

Example:   **document.getElementsByTagName (“ h1 “);**

- We can also change the content of the element using the innerText property.
  Example:  let us assume that h1 element have **hello** as its value in html file.

var ele = document.getElementsByTagName (“ h1 “);\ 
console.log ( ele );   //hello\
ele.innerText = “hii”;\
console.log ( ele );   //hii\
