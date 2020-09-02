// to indicate that the code should be executed in "strict mode". 
// With strict mode, you can not, for example, use undeclared variables.
"use strict";

                var random = Math.floor(Math.random()*10+1) 
                var imgNo  = document.getElementById("randomImg");
                imgNo.src = "./img/cust-"+random+".jpg";
                var random = Math.floor(Math.random()*10+1) 

const name = document.querySelector('#inputName'); // . for classes and # for ids
const course = document.querySelector('#inputCourse');
const professor = document.querySelector('#inputProfessor');

// Displaying a JavaScript object will output [object Object].
// Object.values() converts an object to an array and ready to be displayed.
document.addEventListener('DOMContentLoaded', function(){ 
    const displayObj = new Display(); //create an object
    // console.log(displayObj);

    //add new methods to the object
    displayObj.checkFields(); 
    displayObj.hideSubmit(); 
});


//if we want to add new properties at later stage to a function which will be shared across all the instances
Display.prototype.checkFields = function(){
// function checkFields() {console.log('inja')
    name.addEventListener('blur',this.validateField);
    course.addEventListener('blur',this.validateField);
    professor.addEventListener('blur',this.validateField);
}


document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();

    // const name = document.querySelector('#inputName'); // . for classes and # for ids
    // const course = document.querySelector('#inputCourse');
    // const professor = document.querySelector('#inputProfessor');
    const customers = document.querySelector('.customer-list');

    const customerObj = new customerF (name.value,course.value,professor.value,customers); //type object
    const displayObj = new Display();

    // console.log(customerObj)
    // console.log(displayObj)

    displayObj.calculating(customerObj);
    displayObj.clearForm();
    
})


function Display(){
    this.name = document.getElementById('inputName').value;
    this.course = document.getElementById('inputCourse').value;
    this.professor = document.getElementById('inputProfessor').value;
    this.customers = document.querySelector('.customer-list');
}


function customerF (name, course, professor, customers){
    this.name = name;
    this.course = course;
    this.professor = professor;
    this.customers = customers;
}



// Display.prototype.checkFields = function() {
//     this.name.addEventListener('blur',this.validateField);
//     this.course.addEventListener('blur',this.validateField);
//     this.professor.addEventListener('blur',this.validateField);
// }
Display.prototype.validateField = function(){
// function validateField(){
   if (this.value === '') {
       this.classList.remove('complete')
       this.classList.add('fail')
   } else {
    this.classList.add('complete');
    this.classList.remove('fail');
}

const complete = document.querySelectorAll('.complete');

if (complete.length === 3){
    document.querySelector('.submitBtn').disabled = false;

} else{
    document.querySelector('.submitBtn').disabled = true;
}
};

Display.prototype.hideSubmit = function (){
    const btn = document.querySelector('.submitBtn');
    btn.disabled = true;
}

Display.prototype.calculating = function (customerObj){
    const calc = document.querySelector('.calc');
    const loading = document.querySelector('.loading');

    calc.classList.add('showItem');
    loading.classList.add('showItem');
    this.hideSubmit();

    // const self = this;
    // console.log(self);

    setTimeout(() => {
        calc.classList.remove('showItem');
        loading.classList.remove('showItem');

        this.addCustomer(customerObj);
        
    }, 3000);
}



Display.prototype.addCustomer = function(customerObj){

    let random = getrandom();

    function getrandom() {
        return Math.floor(Math.random()*10+1) // form 1 to 10
    }

    console.log(random)

        const div = document.createElement('div');
        div.classList.add('col-12', 'mx-auto', 'col-lg-6', 'my-3');
        div.innerHTML = `<div class="card text-left">
        <div class="card-header">
             <h6 class="text-capitalize my-1"><span class="badge badge-success mr-1">course :</span>
                <span id="customer-course">${customerObj.course}</span></h6>
        </div>

            <img class="card-img-top" src="./img/cust-${random}.jpg"  alt="Card image">
        <div class="card-body">
        <h6 class="text-capitalize my-3"><span class="badge badge-warning mr-1">Name : </span>
            <span id="customer-name">${customerObj.name}</span></h6>
        <h6 class="text-capitalize my-3"><span class="badge badge-danger mr-1">Professor :</span>
            <span id="customer-professor">${customerObj.professor}</span></h6>
            </div>
            </div>`

        this.customers.appendChild(div);
}

Display.prototype.clearForm = function(){
    console.log(name.value)
    name.value = '';
    course.value = '';
    professor.value = '';

    name.classList.remove('complete', 'fail');
    course.classList.remove('complete', 'fail');
    professor.classList.remove('complete', 'fail');
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });




