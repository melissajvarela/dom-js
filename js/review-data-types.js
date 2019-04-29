//integer
var a = 30;
var b = 600;

console.log(a,b);

var sum = a + b;
console.log(sum);

var div = b / a;
console.log(div);

//string
var str1 = 'Cheese';
var str2 = 'Pizza';
console.log(str1 , str2);

var fullName = str1 + ' ' + str2;
console.log(fullName);

//boolean
var a = true; 
var b = false; 

console.log(23 == '32');
console.log(23 == '23');

console.log(isNaN(32));
console.log(isNaN('4/28/2019'));

//array
var arr=[1, 2, 3];
var arr2=['one', 'two', 'three'];

console.log(arr,arr2);

arr2.push('four');
console.log(arr2);

arr2.splice(2, 1, '3'); 
console.log(arr2);

//object
var pizza = {
    toppings: 'pepperoni',
    size: 'large',
    from: 'Round Table'
};

console.log(pizza.toppings);
console.log(pizza.from);