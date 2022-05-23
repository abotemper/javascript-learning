//for loops

for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    console.log(i);
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

//while loops
const names_1 = ['shaun', 'luigi', 'mario'];
let i = 0;
while(i < 5){
    console.log('in while loop: ',i)
    i++;
}

let j = 0;
while(j < names_1.length){
    console.log(names_1[j]);
    j++;
}


//do while loops

let k = 5;
do{
    console.log('val of k is: ',k);
    k++;
}while(k<5)

//if statements
const age_3 = 20;
if(age_3 > 20){
    console.log('you are over 20 years old');

}

if(age_3 > 19){
    console.log('you are over 19 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
    console.log("thats's a lot of ninjas");
}



const password = '1111';
if(password.length >= 12){
    console.log('that password is might strong');
}else if(password.length >= 8){
    console.log('that password is long enough!');
}else{
    console.log('that password is not long enough!');
}

// if(password.length >= 8){
//     console.log('that password is long enough!');
// }else{
//     console.log('that password is not long enough!');
// }

//logical operators -OR || AND &

if(password.length >= 12 && password.includes('@')){
    console.log('that password is might strong');
}else if(password.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough!');
}else{
    console.log('that password is not long enough!');
}


//logical NOT(!)
let user = false;
if(!user){
    console.log(user);
    
}
console.log(!true);
console.log(!false);




//break and continue

const scores_1 = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores_1.length; i++){

    if(scores_1[i] ===0 ){
        continue;//ignore the rest of the codes , jump into next i
    }



    console.log('your score: ', scores_1[i]);

    if(scores_1[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}

//switch statements
const grade = 'A';

//using if statements
switch(grade){
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');//IF we dont have a break , it will run the rest of the codes
        break;
    case 'E':
        console.log('you got an E');
    default:
        console.log('not a valid grade');
}


// variables & block scope
let ages = 30;

if(true){
    let ages = 40;//allow we redifine the variables inside,//its a local scope
    let name = 'shaun';
    console.log('inside 1st code block: ', ages,name);
    if(true){
        let ages_1 = 22;
        console.log('inside 2nd code block: ', ages);
        console.log('inside 2nd code block: ', ages_1);
    }
    // console.log('inside 2nd code block: ', ages_1);
    var test = 'hello';//even we define it inside , it will work outside,"var"

}

console.log('outside code block： ',ages, name, test);


