const header = document.querySelector("h1"); //can also put class name
console.log(header.parentElement); //should return body if parent element

//create object to store data
const DOMSelectors = {
    header: document.querySelector("h1"),
    description: document.querySelector(".card-desc"),
    items: document.querySelectorAll("li"),
};

console.log(DOMSelectors.description);

function changeColor(){
    let form = document.querySelector(".enter");
    form.addEventListener("submit", function(event) { //it was click and button
        event.preventDefault();
        console.log(event.target); //event.target = element
        button.style.backgroundColor = "red";
}) //event happens, run code
}
//call function
changeColor();