const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');



const paras = document.querySelectorAll('p');

paras.forEach(p => {
    // console.log(p.innerText);
    // console.log(p.textContent);
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    if(p.textContent.includes('success')){
        p.classList.add('success');

    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');