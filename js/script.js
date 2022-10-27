const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (firstname === '' || name.value == null) {
	messages.push('Please enter your first name')
  }
  if (messages.length > 0) {	
	e.preventDefault()
	errorElement.innerText = messages.join(', ')
  }
})