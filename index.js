const personalInfo = document.querySelector('.personal_info_form');
const inputFields = personalInfo.querySelectorAll('input');
const labels = personalInfo.querySelectorAll('label');
const submit = document.querySelector('button');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');

  
submit.addEventListener('click', e=>{
  const requiredName = username.closest('div').querySelector('span');
  const requiredEmail = email.closest('div').querySelector('span');
  const requiredPhone = phoneNumber.closest('div').querySelector('span');

  if (!username.value) {
    requiredName.classList.remove('hidden');
  } else{
    requiredName.classList.add('hidden')
  }
  
  if(!email.value){
    requiredEmail.classList.remove('hidden');
  } else{
    requiredEmail.classList.add('hidden')
  }
  
  if (!phoneNumber.value) {
    requiredPhone.classList.remove('hidden');
  } else {
    requiredPhone.classList.add('hidden');
  }

  // Check if all required fields have values
  if (username.value && email.value && phoneNumber.value) {
    const button = document.querySelector('button');
    const link = button.querySelector('a');
    link.setAttribute('href', './selectplan.html');
  } else {
    e.preventDefault();
    alert( "Please fill in all the required fields: username, email, and phone number." )
  }
})


