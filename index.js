/* const header = document.querySelector("h1"); 
console.log(header.parentElement);  */

//create object to store data
const DOMSelectors = {
  button: document.querySelector(`.submit`),
  name: document.querySelector(`#name`),
  food: document.querySelector(`#food`),
  date: document.querySelector(`#date`),
  container: document.querySelector(`.main-box`),
  box: document.querySelector(".box"),
};

function acquireColor(value) {
  let color = 0;
  for (let i = 0; i < value.length; i++) {
    color += value.charCodeAt(i); //combined length, gets unicode for character at the length of the for loop
    color = color % 256; //keeps it at 255
  }
  return color;
}

//make text dark if overly light
function darkText(r, g, b) {
  console.log(r, g, b);
  if (r > 190 || g > 190 || b > 190) {
    console.log("dark");
    return "0";
  } else {
    console.log("light");
    return "255";
  }
}

//clear fields after putting into form
function clearFields() {
  DOMSelectors.name.value = "";
  DOMSelectors.food.value = "";
  DOMSelectors.date.value = "";
}

//event listener for form
DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();

  //make object
  const info = {
    name: DOMSelectors.name.value,
    food: DOMSelectors.food.value,
    date: DOMSelectors.date.value,
  };

  //do math
  let colorOne = acquireColor(info.name);
  let colorTwo = acquireColor(info.food);
  let colorThree = acquireColor(info.date);

  text = darkText(colorOne, colorTwo, colorThree);

  // Corrected the inline style formatting
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="box" style="background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree}); color: rgb(${text}, ${text}, ${text});">
        <ul>
            <li>Name: ${info.name} </li>
            <li>Favorite Food: ${info.food} </li>
            <li>Birth date: ${info.date} </li>
        </ul>
        <div class="color-box" style="background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree});">
            <h2>I think you'll like the color:</h2>
            <h3>rgb(${colorOne}, ${colorTwo}, ${colorThree})</h3>
        </div>
        <button type="button" class= "remove">remove</button>
      </div>`
  );

  const newBox = DOMSelectors.container.lastElementChild; //adds a box to the last child. which should be container
  const removeButton = newBox.querySelector(".remove"); //selects the button from the container

  removeButton.addEventListener("click", function () {
    //listens for click then removes
    newBox.remove();
  });

  clearFields(info);
});
