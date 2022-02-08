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
// global variables
let allValidated = true;

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

// validation function
function validate (){
    // prevent form reset 
    event.preventDefault();

    // check validation
    checkingInputs();
    
    // check validation complete & display message on succesful submission
    if(allValidated == true){
      SuccessMsg();
    } else {
      // return validation variable to initial state
      allValidated = true; 
      }
}

//calling the function during the submit event
form.addEventListener('submit', validate);

function checkingInputs() {
  // getting user data 
  const firstName = inputData[0].value;
  const lastName = inputData[1].value;
  const email = inputData[2].value;
  const birthDate = inputData[3].value;
  const noOfTournaments = inputData[4].value;
  const locationBtn = document.getElementsByName("location");
  const TandCs = document.getElementById("checkbox1");

  //FIRST NAME CHECK 
  if(firstName == '' || firstName == null){
      //add error class 
      formData[0].setAttribute('data-error-visible', 'true');
      //add error message
      formData[0].setAttribute('data-error', 'Please provide your first name');
      //force validation fail
      allValidated = false;
  } else  if(firstName.length < 2){
      //add error class 
      formData[0].setAttribute('data-error-visible', 'true');
      //add error message
      formData[0].setAttribute('data-error', 'Please make you have typed your first name correctly');
      //force validation fail
      allValidated = false;
  } else {
      formData[0].removeAttribute('data-error-visible');
      formData[0].removeAttribute('data-error');
      //console.log('First Name: ' + firstName);
  }

  //LAST NAME CHECK
  if(lastName == '' || lastName == null){
      //add error class 
      formData[1].setAttribute('data-error-visible', 'true');
      //add error message
      formData[1].setAttribute('data-error', 'Please provide your last name');
      //force validation fail
      allValidated = false;
  } else  if(lastName.length < 2){
       //add error class 
      formData[1].setAttribute('data-error-visible', 'true');
      //add error message
      formData[1].setAttribute('data-error', 'Please make you have typed your last name correctly');
      //force validation fail
      allValidated = false;
  } else {
      formData[1].removeAttribute('data-error-visible');
      formData[1].removeAttribute('data-error');
      //console.log('Last Name: ' + lastName);
  }

  //EMAIL CHECK
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email == '' || email == null){
      //add error class 
      formData[2].setAttribute('data-error-visible', 'true');
      //add error message
      formData[2].setAttribute('data-error', 'Please provide your email');
      //force validation fail
      allValidated = false;
  } else  if(!email.match(regex)){
      //add error class 
      formData[2].setAttribute('data-error-visible', 'true');
      //add error message
      formData[2].setAttribute('data-error', 'Please make sure you have typed your email correctly');
      //force validation fail
      allValidated = false;
  } else {
      formData[2].removeAttribute('data-error-visible');
      formData[2].removeAttribute('data-error');
      //console.log('Email: '+ email);
  }

  //BIRTHDATE CHECK
  if(birthDate == '' || birthDate == null){
      //add error class 
      formData[3].setAttribute('data-error-visible', 'true');
      //add error message
      formData[3].setAttribute('data-error', 'Please provide your date of birth');
      //force validation fail
      allValidated = false;
  } else {
      formData[3].removeAttribute('data-error-visible');
      formData[3].removeAttribute('data-error');
      //console.log('Birth date: '+ birthDate);
    }

  //TOURNAMENTS CHECK
  if(noOfTournaments == '' || noOfTournaments == null){
      //add error class 
      formData[4].setAttribute('data-error-visible', 'true');
      //add error message
      formData[4].setAttribute('data-error', 'Please let us know how many tournaments you have attended in the past');
      //force validation fail
      allValidated = false;
  } else  if(noOfTournaments < 0 ){
      //add error class 
      formData[4].setAttribute('data-error-visible', 'true');
      //add error message
      formData[4].setAttribute('data-error', 'If you have not attended any tournaments before, please type 0');
      //force validation fail
      allValidated = false;
  } else {
      formData[4].removeAttribute('data-error-visible');
      formData[4].removeAttribute('data-error');
      //console.log('Tournaments attended: '+ noOfTournaments);
  }

  // LOCATION CHECK
  let locationSelected = false;
  //iteration of radio buttons for a selection
  for(let i=0; i<locationBtn.length; i++){
    locationBtn[i].addEventListener('change',($event)=>{
      let location = $event.target.value;
    });
      //checking if radio button is selected
    if(locationBtn[i].checked){
      locationSelected = true;
      break;
    }
  }
  //if radio button not selected
  if(locationSelected == false){
      //add error class 
      formData[5].setAttribute('data-error-visible', 'true');
      //add error message
      formData[5].setAttribute('data-error', 'Please select a preferred location');
      //force validation fail
      allValidated = false;
  } else {
      formData[5].removeAttribute('data-error-visible');
      formData[5].removeAttribute('data-error');
      //console.log('Prefered location for next tournament: '+ locationBtn);
     }

  //T&C CHECK
  if(TandCs.checked == false){
      //add error class 
      formData[6].setAttribute('data-error-visible', 'true');
      //add error message
      formData[6].setAttribute('data-error', 'Please make sure you agree to GameOn\'s Terms & Conditions');
      //force validation fail
      allValidated = false;
  } else {
      formData[6].removeAttribute('data-error-visible');
      formData[6].removeAttribute('data-error');
      //console.log('Terms & Conditions accepted');
  }
}

///display submission message
function SuccessMsg(){
  //remove form fields
  form.style.display = 'none';
  //remove any previous messages
  let modalBody = document.querySelector('.modal-body');
  let existingMessage = modalBody.childElementCount;
  if(existingMessage > 1){
    modalBody.removeChild(modalBody.lastChild);
  } 
  //create and display success message
  let successMessage = document.createElement('p');
  successMessage.textContent = 'You have signed up succesfully to our next gaming event';
  successMessage.setAttribute('class', 'hero-text');
  successMessage.style.width = '18em';
  successMessage.style.textAlign = 'center';
  modalBody.appendChild(successMessage);
}

