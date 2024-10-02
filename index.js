const header = document.querySelector("h1"); 
console.log(header.parentElement); 

//create object to store data
const DOMSelectors = {

};

console.log(DOMSelectors.description);

function createObject(){
    let form = document.querySelector(".enter");
    form.addEventListener("submit", function(event) { //it was click and button
        event.preventDefault();
        console.log(event.target); //event.target = element
        button.style.backgroundColor = "red";
}) 
}

changeColor();