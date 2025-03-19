// select items and create variables
const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");
const clearButton = document.getElementById("clearButton");

itemForm.addEventListener("submit", function (e) {
  // Adds a submit event listener to the 'itemForm' HTML form
  e.preventDefault(); //Prevents default form submission and page refresh
  addItem(itemInput.value); // calls the "addItem" function and passes the value from the 'itemInput' field as an argument, here, it adds the input value to a list.
  itemInput.value = ""; // clears the input field after submission by setting its value to an empty string.
});

function addItem(itemText) {
  // The addItem function creates a new list item, taking itemText as its parameter, i.e the text content of the new item
  const itemDiv = document.createElement("div"); // create a new <div> element that will contain the item
  itemDiv.className = "item"; // assign the class name
  itemDiv.innerHTML = `
                <span>${itemText}</span>
                <button onclick="editItem(this)">✏️</button>
                <button onclick="deleteItem(this)">🗑️</button>
            `;
  itemList.appendChild(itemDiv); //adds the newly created div (with its content) to "itemList" element
}

function editItem(button) {
  // This function is designed to edit the text content of the item, with the button element as a parameter
  const itemSpan = button.parentElement.querySelector("span"); // accesses the parent element of the button <div>.
  const newText = prompt("Edit item:", itemSpan.textContent); //opens a browser prompt dialog with the message 'Edit item:', pre-filling the current span text

  if (newText !== null) {
    itemSpan.textContent = newText;
  }

  /*
  const itemDiv = button.closest(".item"); // finds the nearest ancestor element (i.e the div) of the clicked button that has the class 'item'
  const itemSpan = itemDiv.querySelector("span");
  const newText = prompt('Edit item:', itemSpan.textContent);
  if (newText !== null) {
    itemSpan.textContent = newText;
  }
  */
}

function deleteItem(button) {
  button.parentElement.remove();
  //const itemDiv = button.closest(".item");
  //itemList.removeChild(itemDiv);
}

clearButton.addEventListener("click", function () {
  itemList.innerHTML = "";
});
