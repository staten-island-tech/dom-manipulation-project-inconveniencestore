/* const header = document.querySelector("h1"); 
console.log(header.parentElement);  */

//create object to store data
const DOMSelectors = {
  colorBox: document.querySelector(`.color-box`),
  button: document.querySelector(`.submit`),
  remove: document.querySelector(`.remove`),
  name: document.querySelector(`#name`),
  food: document.querySelector(`#food`),
  date: document.querySelector(`#date`),
  container: document.querySelector(`.main-box`),
  box: document.querySelector(".box"),
};

const colorInfo = [];

function acquireColor(value) {
  let color = 0;
  for (let i = 0; i < value.length; i++) {
    color += value.charCodeAt(i); //combined length, gets unicode for character at the length of the for loop
    if (color >= 255) {
      color = color % 256; //remainder
    }
  }
  console.log(color);
  return color;
}

//event listener for form
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  let name = DOMSelectors.name.value;
  let food = DOMSelectors.food.value;
  let date = DOMSelectors.date.value;

  colorInfo.push({ name, food, date });

  console.log(colorInfo);

  let colorOne = acquireColor(name);
  let colorTwo = acquireColor(food);
  let colorThree = acquireColor(date);
  /*   let combinedInput = name + food + date;
  let colorHash = hashCode(combinedInput);
  let color = intToRGB(colorHash); // Convert the hash to a hex color code */

  // Corrected the inline style formatting
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="box" style="background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree});">
              <ul>
                  <li>Your Name: ${name} </li>
                  <li>Favorite Food: ${food} </li>
                  <li>User's Birth date: ${date} </li>
              </ul>
              <div class="color-box" style="background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree});">
                  <h2>I think you'll like the color:</h2>
                  <h3>rgb(${colorOne}, ${colorTwo}, ${colorThree})</h3>
              </div>
              <button type="remove">remove</button>
      </div>`
  );
});

/* DOMSelectors.remove.addEventListener("click", function (event) {
  box.remove;
}); */
