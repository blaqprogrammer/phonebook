"use strict";

const formDisplay = document.getElementById("form-display");
const firstDisplay = document.getElementById("first-display");
const addContactBtn = document.getElementById("add-contact-btn");

addContactBtn.addEventListener("click", () => {
  formDisplay.style.display = "block";
  firstDisplay.style.display = "none";
});

const submitHandler = (event) => {
  if (event) {
    event.preventDefault();
  }

  let dataArray = [];
  let userName = document.getElementById("name").value;
  let userPhoneNumber = document.getElementById("phone-number").value;
  let userLocation = document.getElementById("location").value;
  let userCompany = document.getElementById("company").value;
  let userBloodGroup = document.getElementById("blood-group").value;

  dataArray.unshift(
    userName,
    userPhoneNumber,
    userLocation,
    userCompany,
    userBloodGroup
  );

  console.log(dataArray);

  let newData = dataArray.map((items, index) => {
    return { id: index + 1, value: items };
  });

  console.log(newData);

  let filteredArray = newData.filter((items) => items.id < 3);
  console.log(filteredArray);

  let textElement = document.getElementById("newName");
  textElement.style.marginBottom = "10px";

  // Assuming filteredArray is an array of objects with a 'value' property
  filteredArray.forEach((item, index) => {
    let paragraphElement = document.createElement("p");
    paragraphElement.textContent = item.value;

    if (index === 0) {
      paragraphElement.style.fontWeight = "bold";
      paragraphElement.style.fontSize = "1.5rem";
      paragraphElement.style.color = "rgb(22, 97, 97);";

    }

    if (index === filteredArray.length -1) {
      paragraphElement.style.marginBottom = "17px";
    }

    textElement.appendChild(paragraphElement);
  });

  //Clear the input
  document.getElementById("name").value = "";
  document.getElementById("phone-number").value = "";
  document.getElementById("location").value = "";
  document.getElementById("company").value = "";
  document.getElementById("blood-group").value = "";

  formDisplay.style.display = "none";
  firstDisplay.style.display = "block";
};

formDisplay.addEventListener("submit", submitHandler);

// document.addEventListener("DOMContentLoaded", function () {
// Calling submitHandler without an event parameter
// You can pass a mock event if needed: submitHandler({ preventDefault: () => {} });
//   submitHandler();
// });
