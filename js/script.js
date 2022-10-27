
function validateform(){  
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  if (firstname == "" || firstname == null){  
    alert("Please enter your first name");  
  }
}