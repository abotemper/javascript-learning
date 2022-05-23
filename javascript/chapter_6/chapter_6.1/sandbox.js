const para = document.querySelector('p');//first <p>
console.log(para);

const para2 = document.querySelector('.error');//with "." we can select class(first one)
console.log(para2); 

const para3 = document.querySelector('div.error');//error 的直接上级
console.log(para3); 

const para4 = document.querySelector('body > h1');
console.log(para4);

const paras = document.querySelectorAll('p');//this is node list
console.log(paras);
console.log(paras[0]);
console.log(paras[1]);

paras.forEach(para => {
    console.log(para);
});



const errors = document.querySelectorAll('.error');
console.log(errors);


//get an element by ID
const title = document.getElementById('pagetitle');
console.log(title);

//get elements by their class name
const errors_1= document.getElementsByClassName('error');
//this is node collection 
console.log(errors_1);
console.log(errors_1[0]);

//we cannot use foreach in getbyclassname
// errors_1.forEach(error => {
//     console.log(error);
// });


//get elements by their tag name

const paras_1 = document.getElementsByTagName('p');
console.log(paras_1);
console.log(paras_1[1]);

//summary ,selector is better


const para_5 = document.querySelector('p');

console.log(para_5.innerText);

para_5.innerText = 'ninjas are awesome!';

console.log(para_5.innerText);

const paras2 = document.querySelectorAll('p');

paras2.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});// inner text 改变原有元素中的内容

const content = document.querySelector('.content');
content.innerHTML += '<h2> THIS IS A NEW H2<h2>';//inner html 可以改变html 结构

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');

console.log(link.getAttribute('href'));// address
link.setAttribute('href','https://www.thenetninja.co.uk');
console.log(link.getAttribute('href'));
link.innerText = 'the net ninja website';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');//first is the attribute name, second is the value you want to change
mssg.setAttribute('style', 'color: green;')//even an attribute didn't exist, you create an attribute and set a value to it


const title1 = document.querySelector('h1');

// title.setAttribute('style', 'margin : 50px;')its a overwrite

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';//remove an attribute

const content2 = document.querySelector('p');
console.log(content2.classList);
content.classList.add('hehe');