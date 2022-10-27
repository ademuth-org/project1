function validateForm() {
  let x = document.forms["dig"]["firstname"].value;
  if (x == "") {
    alert("Please remember to fill out all fields");
    return false;
  }
}