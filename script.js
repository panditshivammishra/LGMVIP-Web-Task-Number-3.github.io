
// 'use strict';

var urName = document.getElementById('yourName')
var email1 = document.getElementById('email1')
var ph_code = document.getElementById('code1')
var ph_no = document.getElementById('no1')
var clear = document.querySelector('.clear');
var content = document.querySelector('.registered');
let op1 = document.getElementById('inlineRadio1')
let op2 = document.getElementById('inlineRadio2')
let chk1 = document.getElementById('inlineCheckbox1')
let chk2 = document.getElementById('inlineCheckbox2')
let chk3 = document.getElementById('inlineCheckbox3')
let form = document.querySelector('form');

var output
var loadFile = function (event) {
  output = URL.createObjectURL(event.target.files[0]);
};


clear.addEventListener('click',()=>{
    form.reset();
})
form.addEventListener('submit', (e)=>  {
    e.preventDefault();

    var genderInputs = document.getElementsByName("gender");
    if(!genderInputs[0].checked&&!genderInputs[1].checked){
        alert("select your gender");
        return false;
    }
 
    
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  if(values.length==0)
  {
    values=["No Skills"];
  }
    content.innerHTML += `
  <div class="users" style="max-width: 700px;">
  <div class="row g-0">
    <div class="col-5" style="width: 35%;" >
      <img src='${output}' style="height: 232px;" class="img-fluid rounded-start" id='display_img'>
    </div>
    <div class="col-7">
      <div class="card-body">
        <h5 class="card-title">${urName.value}</h5>
        <p class="card-text">${op1.checked ? op1.value : op2.checked}</p>
        <p class="card-text">${email1.value}</p>
        <p class="card-text">${ph_code.value} ${ph_no.value}</p>
        <p class="card-text">${values}</p>
      </div>
    </div>
  </div>
  </div>`

    alert('Student Enrolled Successfully!')
    form.reset();

});