"use strict";

const formDisplay = document.getElementById("form-display");
const firstDisplay = document.getElementById("first-display");
const addContactBtn = document.getElementById("add-contact-btn");

addContactBtn.addEventListener("click", () => {
  formDisplay.style.display = "block";
  firstDisplay.style.display = "none";
});

const submitHandler = (event) => {
  const dataArray = [];
  event.preventDefault();
  const userName = document.getElementById("name").value;
  const userPhoneNumber = document.getElementById("phone-number").value;
  const userLocation = document.getElementById("location").value;
  const userCompany = document.getElementById("company").value;
  const userBloodGroup = document.getElementById("blood-group").value;

  dataArray.unshift(
    userName,
    userPhoneNumber,
    userLocation,
    userCompany,
    userBloodGroup
  );

  let newName = document.getElementById("newName");
  newName.textContent = `${userName}`;

  let newPhoneNo = document.getElementById("newPhoneNo");
  newPhoneNo.textContent = `${userPhoneNumber}`;

  formDisplay.style.display = "none";
  firstDisplay.style.display = "block";
};

formDisplay.addEventListener("submit", submitHandler);
