const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit',e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value);//username in here is the input id
//^ninja$ no before it, no after it
//^[a-z]$ only one letter match ^[a-zA-Z]$
//^[a-zA-Z]{6,10}$ one word between 6-10 letters
//^[a-zA-Z0-9]{6,10}$
//^.{6,10}$ //all character between 6-10

    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    if(usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'that username is valid!';
    }else{
        //..feedback help info
        feedback.textContent = 'that username must contain letters only & be between 6&12 characters long';
    }
});
// //testing RegEx
// const username = '123shaunp123';
// const pattern = /^[a-z]{6,}$/;//at least 6 letters,^start with, $ end with

// let result = pattern.test(username);//return true or false

// console.log(result);

// if(result){
//     console.log(`regex text passed :)`);
// }else{
//     console.log('regex text failed :(');
// }

// let result1 = username.search(pattern);//return to a integer

// console.log(result1);//before the first letters


//live feedback

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value,form.username.value);//two same thing
    console.log(e);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    }else{
        form.username.setAttribute('class','error');
    }
});