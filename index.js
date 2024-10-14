/* const header = document.querySelector("h1"); 
console.log(header.parentElement);  */

//create object to store data
const DOMSelectors = {
  colorBox: document.querySelector(`.color-box`),
  button: document.querySelector("button"),
  name: document.querySelector(`#name`),
  food: document.querySelector(`#food`),
  date: document.querySelector(`#date`),
  container: document.querySelector(`.main-box`),
};

console.log(DOMSelectors.description);

// Function to hash string inputs into a numeric value
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash); //dont get this
  }
  return hash;
}

// hash 2 color code
function intToRGB(hash) {
  let color = (hash & 0x00ffffff).toString(16).toUpperCase(); //dont get this
  return "#" + "00000".substring(0, 6 - color.length) + color; //dont get the later portion
}
//const information = Array.from(item);

//event listener for form
DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let food = DOMSelectors.food.value;
  let date = DOMSelectors.date.value;

  let combinedInput = name + food + date;
  let colorHash = hashCode(combinedInput);
  let color = intToRGB(colorHash); // Convert the hash to a hex color code

  // Corrected the inline style formatting
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="box">
              <ul>
                  <li>Your Name: ${name} </li>
                  <li>Favorite Food: ${food} </li>
                  <li>User's Birth date: ${date} </li>
              </ul>
              <div class="color-box" style="background-color: ${color};">
                  <h2>I think you'll like the color:</h2>
                  <h3>${color}</h3>
              </div>
      </div>`
  );
});

//turn stuff into base 16
//function sillyMath() {}

//element.style.backgroundColor = "#FF0000";

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
