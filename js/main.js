console.log('JavaScript is running!');

/* this is a JS block comment. 
The last statement creates a variable - a chunk of cimputer memory that can hold references to data that you want to save. we are storing a reference to an element on the page with this line - look for the element with the ID we specify inside of the round brackets (the image tag with the Id of bitmapgraphic) 

document refers to the index.html pafe; querySelector is HOW JS uses CSS to select elements on the page (called a method*/

//step 1 - select the elemnts you want to the user to interact with
let bitmapgraphic = document.querySelector("#bitmapgraphic")


//step 3 - what happens when events are triggered?

function logID() {
    console.log(this.id);
}

//step 2 - how do you want the user to interact with the element?
bitmapgraphic.addEventListener('click', logID);
