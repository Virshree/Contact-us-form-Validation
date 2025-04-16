const form=document.getElementById("myForm");



form.addEventListener("submit",function(event){
    event.preventDefault();

    if(validateForm()){
       document.getElementById("successMessage").style.display="block";
        form.reset();

        //hide success message after 3 secs

        setTimeout(()=>{
            document.getElementById("successMessage").style.display="none";
        },3000)
    }

})


function validateForm(){

    let isValid=true;
    //Get fresh value each time 
const fname=document.getElementById("fname").value.trim();
const lname=document.getElementById("lname").value.trim();
const email=document.getElementById("email").value.trim();
const query1=document.getElementById("radio1").checked;
const query2=document.getElementById("radio2").checked;
const message=document.getElementById("message").value.trim();
const checkbox=document.getElementById("checkbox").checked;
   

    //validate name
    
    // First Name
  if (fname === "") {
     document.getElementById("fnameError").style.display = "block";
   
    isValid = false;
  } else {
   
   document.getElementById("fnameError").style.display = "none";
  }

  // Last Name
  if (lname === "") {
    document.getElementById("lnameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("lnameError").style.display = "none";
  }

  // Email
  if (!validateEmail(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Radio buttons
  if (!query1 && !query2) {
    document.getElementById("queryError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("queryError").style.display = "none";
  }

  // Message
  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("messageError").style.display = "none";
  }

  // Checkbox
  if (!checkbox) {
    document.getElementById("checkboxError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("checkboxError").style.display = "none";
  }

  return isValid;
   
}



function validateEmail(email) {
    // Simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }