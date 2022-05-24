const button = document.querySelector('button');

// button.addEventListener('click', ()=>{
//     console.log('you click me');
// });

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click',e => {
        //console.log('item clicked');
        // console.log(e);
        // console.log(e.target);//more usuall
        // console.log(item);
        e.target.style.textDecoration = 'line-through';
    });
});

// const ul = document.querySelector('ul');
// ul.remove();

// items.forEach(item => {
//     item.addEventListener('click',e => {
//     e.target.remove();
//     console.log('event in LI');
//     e.stopPropagation();// we wont show the parent
//     });
// });

const button1 = document.querySelector('button');
const ul = document.querySelector('ul');

// button.addEventListener('click', e => {
//     ul.innerHTML += '<li>something new</li>';
// });

button.addEventListener('click', e => {
    const li = document.createElement('li');
    li.textContent = 'something new new to do';
    // ul.append(li);
    ul.prepend(li);
});
ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }

});//use ul ,and e.target to get the li