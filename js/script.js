
function validateform(){  
  var firstname = document.getElementById('firstname')
  var lastname = document.getElementById('lastname')
  var email = document.getElementById('email')
  if (firstname=="" || firstname==null){  
    alert("Please enter your first name");  
  }
  else {
    alert("You are now signed up!");
  }
}  