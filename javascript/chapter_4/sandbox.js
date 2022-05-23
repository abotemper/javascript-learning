//function declaration

// function greet(){
//     console.log('hello there');
// }
greet();
greet();

//function expression
const speak = function(){
    console.log('good day');

};//javascript does not host function expressions,

speak();
speak();

function greet(){
    console.log('hello there');
}// still run even if at the downside,its;s effectively hoisting it up to top

//declaration or expression first then use is a better idea

//arguments & parameters

const speak1 = function(name = 'ligui', time = 'night'){
    console.log(`good day ${time} ${name}`);

};//receive a value, and create these different values in siade the function, called parameters


speak1('mario','morning');

speak1();//better give defaut value
speak1('shaun');


//returning values

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
};
const a = calcArea(5);
// console.log(area);  its inside value
console.log(a);


const calcArea1 = function(radius){
    return 3.14 * radius**2;
};
console.log(calcArea1(5));

//regular function

//arrow function
const calcArea2 = (radius) => {
    return 3.14 * radius**2;
};


const area2 = calcArea(5);
console.log('area is ',area2);


const calcArea3 = radius => {
    return 3.14 * radius**2;
};//when we only have one parameter, ()is not necessary

const calcArea4 = (radius,something) => {
    return 3.14 * radius**2;
};//when we have multiple parameters,we must code () 

const calcArea5 = radius =>  3.14 * radius**2;
//when we have a single return like this on one line, 
//we can actually take away the return
//and code block {}
console.log(calcArea5(5));


//practice arrow functions
//1.
const greet2 = function(){
    return 'hello, world';
};

const greet3 = () => 'hello world';
const result = greet2();
const result1 = greet3();
console.log(result);
console.log(result1);


//2.
const bill = function(products, tax){
    let total = 0;
    for(let i = 0;i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30], 0.2));

//arrow version
const bill1 = (products, tax) => {
    let total = 0;
    for(let i =0;i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill1([10,15,30], 0.2));


//function
const greet4 = () => 'hello';
let resultOne = greet4();
console.log(resultOne);



//methods
let name1 = 'shaun';
let resultTwo = name1.toUpperCase();
console.log(resultTwo);

//callbacks & foreach
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};
myFunc(function(value){
    console.log(value);
});

myFunc(value => {
    console.log(value);
});
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach(function(person){
    console.log(person);
});

people.forEach(person => {
    console.log(person);
});

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};
people.forEach(logPerson);


//get a reference to the 'ul'
const ul = document.querySelector('.people');

const people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people1.forEach(function(person){
    //create html template
    html += `<li style="color: purple">${person}</li>`;

});
console.log(html);

ul.innerHTML = html;

people1.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>`;

});
ul.innerHTML = html;



