
const arcade = document.querySelector('.arcade');
arcade.insertAdjacentHTML('beforeend', `
<div>
  <p class="text-CoolGray font-sans font-semibold">$9/mo</p>
</div>
`);
const advanced = document.querySelector('.advanced');
advanced.insertAdjacentHTML('beforeend', `
<div>
  <p class="text-CoolGray font-sans font-semibold">$12/mo</p>
</div>
`);
const pro = document.querySelector('.pro');
pro.insertAdjacentHTML('beforeend', `
<div>
  <p class="text-CoolGray font-sans font-semibold">$15/mo</p>
</div>
`);

const monthly = document.querySelector('.monthly')
const yearly = document.querySelector('.yearly')

const plans = document.querySelectorAll('.plan');

plans.forEach(plan=>{
  plan.addEventListener('click',e=>{
   e.target.classList.toggle('select_plan_active');
  })
})

const billToggle = document.querySelector('.bill_toggle');


billToggle.addEventListener('click',()=>{
  yearly.classList.toggle('text-MarineBlue');
  monthly.classList.toggle('text-CoolGray');
  billToggle.querySelector('div').classList.toggle('justify-end');
  if(billToggle.querySelector('div').classList.contains('justify-end')){
    arcade.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$90/yr</p>
          <p class = "text-MarineBlue font-sans font-semibold">2 months free</p>
          `;
    advanced.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$120/yr</p>
          <p class = "text-MarineBlue font-sans font-semibold">2 months free</p>
          `;
    pro.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$150/yr</p>
          <p class = "text-MarineBlue font-sans font-semibold">2 months free</p>
          `;
  }else {
    arcade.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$9/mo</p>
          `;
    advanced.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$12/mo</p>
          `;
    pro.querySelector('div').innerHTML = `
          <p class="text-CoolGray font-sans font-semibold">$15/mo</p>
          `;
   
  }
})