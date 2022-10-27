const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')

function validateform(){  
  if (firstname=="" || firstname==null){  
    alert("Please enter your first name");  
  }
  else {
    alert("You are now signed up!");
  }
}  