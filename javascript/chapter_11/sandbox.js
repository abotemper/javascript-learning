//store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);//has to be a string, but in this part , the browser will 
//automatically convert it to a string

//once we store it, if we comment it after, we will still have it in the local browser storage



//get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name,age);



//updating data
localStorage.setItem('name', 'luigi');

localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

//deleting data from local storage

localStorage.removeItem('name');

name = localStorage.getItem('name');
console.log(name);

localStorage.setItem('name', 'luigi');
name = localStorage.getItem('name');
console.log(name,age);

localStorage.clear();
name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name,age);



//stringifying and parsing data

const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
]; 

console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(stored);
console.log(JSON.parse(stored));