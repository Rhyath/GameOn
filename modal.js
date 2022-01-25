function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// DOM Elements & required variables
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const form = document.querySelector("form");
const formData = document.querySelectorAll(".formData"); 
const inputData = document.getElementsByClassName("text-control");
const submitBtn = document.querySelectorAll(".btn-submit");
let errorCounter = 0;
let allChecksPassed = false;
//const checkFailed == true;

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

  while(allChecksPassed == false) {
  //clear last error message (textfields) 
  clearLastMessage();

   //check validation
  checkingInputs();
  }
  //on succesful submission
  SuccessMsg();
  
/*  if(checkingInputs()){
    if(checkFailed == false){
    Success();
    } else {
      alert('One of the checks has failed');
    }
  }
*/
  });
}


function checkingInputs() {
  // getting user data 
  const firstName = inputData[0].value;
  const lastName = inputData[1].value;
  const email = inputData[2].value;
  const birthDate = inputData[3].value;
  const noOfTournaments = inputData[4].value;
  const locationBtn = document.getElementsByName("location");
  const TandCs = document.getElementById("checkbox1");
  errorCounter = 0;

  //FIRST NAME CHECK - error message does not change - stuck to first <p> element created due to clear last message function
  
  if(firstName == '' || firstName == null){
      //add error class & counter
      formData[0].setAttribute('data-error-visible', 'true');
      inputData[0].setAttribute('data-error-visible', 'true');
      errorCounter++;
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please provide your first name!';  
      errorText.setAttribute('class', 'error-message');
      formData[0].appendChild(errorText);
  } else  if(firstName.length < 2){
      //add error class & counter
      formData[0].setAttribute('data-error-visible', 'true');
      inputData[0].setAttribute('data-error-visible', 'true');
      errorCounter++;
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please make sure you have typed your first name correctly';
      errorText.setAttribute('class', 'error-message');
      formData[0].appendChild(errorText);
  } else {
      return firstName;
  }

    //LAST NAME CHECK
    if(lastName == '' || lastName == null){
      //add error class & counter
      formData[1].setAttribute('data-error-visible', 'true');
      inputData[1].setAttribute('data-error-visible', 'true');
      errorCounter++;
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please provide your last name';
      errorText.setAttribute('class', 'error-message');
      formData[1].appendChild(errorText);
  } else  if(lastName.length < 2){
      //add error class & counter
      formData[1].setAttribute('data-error-visible', 'true');
      inputData[1].setAttribute('data-error-visible', 'true');
      errorCounter++;
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please make sure you have typed your last name correctly';
      errorText.setAttribute('class', 'error-message');
      formData[1].appendChild(errorText);
  } else {
      return lastName;
  }

    //EMAIL CHECK
    if(email == '' || email == null){
        //add error class & counter
        formData[2].setAttribute('data-error-visible', 'true');
        inputData[2].setAttribute('data-error-visible', 'true');
        errorCounter++;
        //add & show error message
        let errorText = document.createElement('p');
        errorText.textContent = 'Please provide your email address';
        errorText.setAttribute('class', 'error-message');
        formData[2].appendChild(errorText);
    } else  if(email.pattern !== '[a-z0-9._%+-]+\@[a-z0-9.-]+\.[a-z]{2,4}$'){
        //add error class & counter
        formData[2].setAttribute('data-error-visible', 'true');
        inputData[2].setAttribute('data-error-visible', 'true');
        errorCounter++;
        //add & show error message
        let errorText = document.createElement('p');
        errorText.textContent = 'Please make sure you have typed your email correctly';
        errorText.setAttribute('class', 'error-message');
        formData[2].appendChild(errorText);
    } else {
        return email;
    }

  //BIRTHDATE CHECK
  if(birthDate == '' || birthDate == null){
      //add error class & counter
      formData[3].setAttribute('data-error-visible', 'true');
      inputData[3].setAttribute('data-error-visible', 'true');
      errorCounter++;
      //add & show error message
      let errorText = document.createElement('p');
      errorText.textContent = 'Please provide your date of birth';
      errorText.setAttribute('class', 'error-message');
      formData[3].appendChild(errorText);
  } else {
      return email;
    }

   //TOURNAMENTS CHECK
   if(noOfTournaments == '' || noOfTournaments == null){
    //add error class & counter
    formData[4].setAttribute('data-error-visible', 'true');
    inputData[4].setAttribute('data-error-visible', 'true');
    errorCounter++;
    //add & show error message
    let errorText = document.createElement('p');
    errorText.textContent = 'Please let us know how many tournaments you have attended in the past';
    errorText.setAttribute('class', 'error-message');
    formData[4].appendChild(errorText);
  } else  if(noOfTournaments < 0 ){
    //add error class & counter
    formData[4].setAttribute('data-error-visible', 'true');
    inputData[4].setAttribute('data-error-visible', 'true');
    errorCounter++;
    //add & show error message
    let errorText = document.createElement('p');
    errorText.textContent = 'If you have not attended any tournaments before, please type 0';
    errorText.setAttribute('class', 'error-message');
    formData[4].appendChild(errorText);
  } else {
      return noOfTournaments;
  }

  // LOCATION CHECK
  let locationSelected = false;
  let existingErrorText = document.getElementById('locationBtn-error-message');
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
     //add eror class & counter
    formData[5].setAttribute('data-error-visible', 'true'); 
    errorCounter++;
    //check if error message element exists & amend message
    if(formData[5].contains(existingErrorText)){
      existingErrorText.textContent = 'Please select a preferred location!';
     } else {
        // or if does not exist, add & show error message
        let errorText = document.createElement('p');
        errorText.textContent = 'Please select a preferred location';
        errorText.setAttribute('class', 'error-message');
        errorText.setAttribute('id', 'locationBtn-error-message');
        formData[5].appendChild(errorText);
     } 
   } //if radio button gets selected after prompt, remove error message
    else if(locationSelected == true && formData[5].contains(existingErrorText)){
        formData[5].removeChild(existingErrorText);
   } else {
       return location;
     }

  //T&C CHECK
    if(TandCs.checked == false){
      let checkboxLabel = document.querySelector('[for="checkbox1"]');
      //clear previous message
        let existingErrorMessage = checkboxLabel.childElementCount;
        if(existingErrorMessage > 1) {
          checkboxLabel.removeChild(checkboxLabel.lastChild);
        }
      //add error styling & counter
      let checkboxIcon = document.querySelector('[for="checkbox1"] span');
      checkboxIcon.style.border = '1px solid red'; 
      errorCounter++;
      //add error message
      let errorText = document.createElement('p');
      errorText.textContent = 'You must accept GameOn\'s terms and conditions to continue';
      errorText.setAttribute('class', 'error-message');
      errorText.style.fontSize = '0.8em';
     checkboxLabel.appendChild(errorText);
    } else {
      return TandCs.checked;
    }

  console.log(errorCounter);
  if(errorCounter == 0){
    allChecksPassed = true;
  } 
}

//keeps only 1 line of error message in display per textfield data div
function clearLastMessage() {
  let textfield = document.querySelectorAll(".textfield");
  for(var i=0; i<textfield.length; i++){
    let errorMessageInPlace = textfield[i].childElementCount;
    if(errorMessageInPlace > 4) {
      textfield[i].removeChild(textfield[i].lastChild);
    }
  }
}

//checking Success for completing submission message
//function checkSuccess(){
//  if(errorCounter > 0){
//    alert('Fix the errors');
//  } else {
//    SuccessMsg();
//  }
//}

//display submission message
function SuccessMsg(){
  //remove form fields
  form.style.display = 'none';
  //create and display success message
  let modalBody = document.querySelector('.modal-body');
  let successMessage = document.createElement('p');
  successMessage.textContent = 'You have signed up succesfully to our next gaming event';
  successMessage.setAttribute('class', 'hero-text');
  successMessage.style.width = '18em';
  successMessage.style.textAlign = 'center';
  modalBody.appendChild(successMessage);
}

