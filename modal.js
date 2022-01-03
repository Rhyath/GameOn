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
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData"); 
const inputData = document.getElementsByClassName("text-control");
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

//................................... working on code here ....................

//validation function
function validate (){
  form.addEventListener('submit', ($event) => {
    //prevent form reset -- $event.preventDefault(); -- doesn't work here, but it works when directly inline on html

    //check validation
    checkingInputs();

    //display message on succesful submission
  });
}


function checkingInputs() {
  // getting user data 
  const firstName = inputData[0].value;
  const lastName = inputData[1].value;
  const email = inputData[2].value;
  const birthDate = inputData[3].value;
  const noOfTournaments = inputData[4].value;
  /*
  const cityRadioBtn = document.getElementsByName("location");

  for(i=0; i<cityRadioBtn.length; i++) {
    cityRadioBtn[i].addEventListener('change', ($event) => {
      const preferedCity = $event.target.value;
    });
  }
*/

  //FIRST NAME CHECK
  if(firstName == '' || firstName == null){
      //add error class
      formData[0].setAttribute('data-error-visible', 'true');
      inputData[0].setAttribute('data-error-visible', 'true');
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please provide your first name';
      errorText.setAttribute('class', 'error-message');
      formData[0].appendChild(errorText);
  } else  if(firstName.length < 2){
    //add error class
    formData[0].setAttribute('data-error-visible', 'true');
    inputData[0].setAttribute('data-error-visible', 'true');
    //add & show error message
    let errorText = document.createElement('p');
    errorText.textContent = 'Please make sure you have typed your first name correctly';
    errorText.setAttribute('class', 'error-message');
    formData[0].appendChild(errorText);
  } else {
    // console.log(firstName); -- TESTING
    return firstName;
  }
}

function clearLastMessage() {
  if(formData.childElementCount > 4){
    formData.removeChild(formData.children[formData.childElementCount-1]);
  }
}