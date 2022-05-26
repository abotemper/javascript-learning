const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

// const premiumUsers = users.filter(users => {
//     return users.premium;
// });
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);

const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map(price =>  price / 2);

console.log(salePrices);


const products = [
    {name:'gold star', price: 20},
    {name:'mushroom', price: 40},
    {name:'green shells', price: 30},
    {name:'banana skin', price: 10},
    {name:'red shells', price: 50}
];

const saleProducts = products.map(product => {
    if(product.price > 30){
        //if we let
        //product.price = product.price / 2
        //then it will edit the products itself directly
        return {name: product.name, price: product.price / 2};
    }else{
        return product;
    }
});

console.log(saleProducts);

const sscores = [10, 20, 60, 40, 70, 90, 30];

//reduce, curr is the item of the array, it can be a number, string, or a object etc..
//the goal of the reduce is to return a single value ,that value is based on this accumulator
//which can edit as we iterate the array
const result = sscores.reduce((acc, curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
},0);//0 is the initial value of acc
console.log(result);

const sscores1 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
];

const marioTotal = sscores1.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;

},0);

console.log(marioTotal);

//find method

const scores2 = [10, 5,0, 40, 60, 10, 20, 70];

const firstHghScore = scores2.find(score => score > 50);
//find the first number that higher than 50

console.log(firstHghScore);

//sort method
//example 1 string sorting
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'ligui'];
const newNames = names.sort();
console.log(newNames);//asmii
names.sort();
names.reverse();
console.log(names);


//example 2 - sorting numbers
const scores3 = [10, 50, 20, 5, 35, 70, 45];// cant sort 5
console.log(scores3.sort());//lowest to highest

//example 3 - sorting objects

scores3.sort((a,b) => b - a);
console.log(scores3);

const players = [
    {name: 'mario', score: 20},
    {name: 'ligui', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

players.sort((a, b) => {
    if(a.score > b.score){
        return -1;//
    }else if(b.score > a.score){
        return 1;//swap
    }else{
        return 0;//no change needed
    }
});//sort 要升序的话，回调函数中，a>b，也就是前一个比后一个大的话，返回一个正值，
//要倒序的话，返回一个负值

players.sort((a,b) => b.score - a.score);//简化版本

console.log(players);


const products2 = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'muishroom', price: 50}
];

// const filtered = products2.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

//chaning array method
//a more concise way
const promos = products2
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);
console.log(promos);
