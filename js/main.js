// JavaScript Document

/* ******************************************

ACCESSING OBJECTS BY ID:

var foundYou = document.getElementById("overview");
console.log(foundYou);

console.log(foundYou.innerText); //access the text within this object
foundYou.innerText = "Taco Cat"; //puts new inner text in that h1 object

console.log(foundYou.innerHTML); //another version of the above
foundYou.innerHTML = "Staco Cats";

*/


/* ******************************************** 

ACCESSING OBJECTS BY TAG NAME

var objectByTag = document.getElementsByTagName("p");
console.log(objectByTag); //Because they are in collection notation, we can use array notation to access them

console.log(objectByTag[1].innerText);
objectByTag[1].innerText = "Mountain biking is fun.";

*/


/* ******************************************** 

ACCESSING OBJECTS BY NAME


var objectByName = document.getElementsByName("description");
console.log(objectByName); //again, use array notation

console.log(objectByName[0].innerText);
objectByName[0].innerText = "Skiing is alright too";

*/


/*  ******************************************** 

ACCESSING OBJECTS BY CLASS


var objectByClass = document.getElementsByClassName("smallCenter");
console.log(objectByClass);

console.log(objectByClass[0].innerHTML);
objectByClass[0].innerHTML = "Bananas for breakfast";

*/


/*  ******************************************** 
 
QUERY SELECTOR ALL

var queryAll = document.querySelectorAll('li'); //find all li selectors
console.log(queryAll);

console.log(queryAll[2].innerText);
queryAll[2].innerText = "Fruit Loops";

CONTINUED ******************************************** 

var queryAll = document.querySelectorAll('ul#lp_list li'); //select the child objects (li's) of an unordered list by its class name

console.log(queryAll);

console.log(queryAll[0].innerText)
console.log(queryAll.length); // length of the list of LIs

queryAll[1].innerText = "Funky Loops";

*/


/* ******************************************** 

COMBO 1

var comboOne = document.getElementById("sw_list");
console.log(comboOne);

var childArray = comboOne.getElementsByTagName('li'); //narrowed down from document to comboOne objects, now access just child li's 
console.log(childArray);

childArray[0].innerText = "Grapes";
childArray[1].innerText = "Apples";
childArray[2].innerText = "Kiwis";

*/ 

/* ******************************************** 

COMBO 2


var newOptions = ["Roy", "G.", "BIV"]; //make an array of new options

var formById = document.getElementById("myForm");
console.log(formById);

var selectArray = formById.getElementsByTagName("option");
console.log(selectArray);

for (i=0; i<selectArray.length; i++){
    selectArray[i].innerText = newOptions[i];
}

*/

/* ********************************************

COMBO 3


var inputInfo = document.getElementById('myForm');
console.log(inputInfo);

var inputArray = inputInfo.getElementsByTagName("input");
console.log(inputArray); 

for (i=0; i<inputArray.length; i++) {
    console.log(inputArray[i].value);
}

*/
