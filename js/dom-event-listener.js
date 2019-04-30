// //query selector
// var anchor = document.querySelector('a');
// console.log(anchor);

// var allAnchors = document.querySelectorAll('a');
// console.log(allAnchors);

// //change text
// allAnchors[1].textContent = 'This text is set from JS using DOM manipulation.';
// allAnchors[1].href = 'https://www.google.com';
// allAnchors[1].target = '_blank';

// //get element by id
// var para1 = document.getElementById('para-1');
// console.log(para1);

// var para1UsingSelector = document.querySelector('#para-1');
// console.log(para1UsingSelector);

// //change text color
// para1.style.color = 'orange'; //using color



//button
var btn = document.getElementsByClassName('button');
// console.log(btn[0]);
btn[0].style.padding = "10px";
btn[0].style.fontSize = "22px";

//add event listener 
btn[0].addEventListener('click', function() {
    console.log('Button was clicked form JS!');
});

btn[0].addEventListener('mouseover', function (event) {
    console.log(event);
    console.log(typeof event.target);

    var btnText = event.target.innerHTML;

    alert('Mouse over on the' + btnText + 'button.');

});

var cancelBtn = document.querySelector('.cancel-button');
    cancelBtn.addEventListener('click', function () {
       var response = confirm('Are you sure you want to cancel');
       console.log(response);
    });

// if user confirms, do something = response value is true
//if user cancels, do something - response value is false

// document.addEventListener('keypress', function (event) {
//     console.log(event.key);
//     console.log(event.keyCode);
// });

document.addEventListener('keydown', function (event) {
    console.log(event.key);
    console.log(event.keyCode);
});

document.addEventListener('keyup', function (event) {
    console.log(event.key);
    console.log(event.keyCode);
});


document.addEventListener('scroll', function (event) {
    console.log(event);
    
});