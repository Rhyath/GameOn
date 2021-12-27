function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData"); // why is this being used? it's the label
const inputData = document.getElementsByClassName("text-control");
const cityRadioBtn = document.getElementsByName("location");
const submitBtn = document.querySelectorAll(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

/*
// getting user data 
const firstName = inputData[0].value;
const lastName = inputData[1].value;
const email = inputData[2].value;
const birthDate = inputData[3].value;
const noOfTournaments = inputData[4].value;

for(i=0; i<cityRadioBtn.length; i++) {
  cityRadioBtn[i].addEventListener('change', ($event) => {
    const preferedCity = $event.target.value;
  });
}

// keep form data after validating
submitBtn.addEventListener('click', ($event) => {
  $event.preventDefault();
})
*/


