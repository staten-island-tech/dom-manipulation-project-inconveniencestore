/* const header = document.querySelector("h1"); 
console.log(header.parentElement);  */

//create object to store data
const DOMSelectors = {
  colorBox: document.querySelector(`.color-box`),
  button: document.querySelector("button"),
  name: document.querySelector(`#name`),
  container: document.querySelector(`.main-box`),
};

console.log(DOMSelectors.description);

//const information = Array.from(item);

//event listener for form
DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;

  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    ` <div class="main-box">
        <div class="box">
            <h2>Name</h2>
            <ul>
                <li>Your Name: ${name}</li>
                <li>Favorite Food:</li>
                <li>User's Birth date: </li>
            </ul>
            <div class="color-box">
                <h2>I think you'll like the color:</h2>
                <h3>#000000</h3>
            </div>
        </div>`
  );
});

//function storeInput() {}

//get values for the object

//turn stuff into base 16
//function sillyMath() {}

//create the card and insert?
/* function createObject(){
    let form = document.querySelector(".enter");
    form.addEventListener("submit", function(event) { //it was click and button
        event.preventDefault();
        console.log(event.target); //event.target = element
        button.style.backgroundColor = "red";
}) 
} */

//find and remove buttons, add event listeners?
