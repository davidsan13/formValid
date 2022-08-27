const email = document.getElementById('email');
const password = document.getElementById('password')
const conpw = document.getElementById('confirmpassword');
const zipcode = document.getElementById('zipcode');
const required = document.querySelectorAll('[required]')
const submit = document.getElementById('submit')
const allpw = document.querySelectorAll("input[type='password']")
console.log(allpw)
email.addEventListener("focusout", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

conpw.addEventListener('input', (e) => {
  if(conpw != password) {
    conpw.setCustomValidity("Passwords does not match!");
    conpw.reportValidity();
  } else {
    conpw.setCustomValidity("")
  }
})

submit.addEventListener('click', (e) => {
  
  required.forEach(item => {
    if(item.validity.valueMissing) {
      e.preventDefault()
      item.setCustomValidity("Input is Required");
      item.reportValidity();
    } else {
      item.setCustomValidity('')
    }
  })
})

password.addEventListener('blur', (e) => {
  if(password.validity.tooShort) {
    password.setCustomValidity('Password does not meet minimum requirement');
    password.reportValidity();
  } else {
    password.setCustomValidity('')
  }
})
// password
//  - tooShort
//  - tooLong