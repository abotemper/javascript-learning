//sets


const nameArray = ['ryu', 'chunli', 'ryu', 'shaun'];
console.log(nameArray);


const nameSet = new Set(['ryu', 'chunli', 'ryu', 'shaun']);//将多余的ryu去掉了
//set中不允许重复
//但是set返回的是set对象
console.log(nameSet);

const nameSet2 = new Set(nameArray);
console.log(nameSet2);

const uniqueNames = [...nameSet2];//用...这个办法也会去重，返回的是一个array而不是set对象
console.log(uniqueNames);

//所以上面可能说错了，这列是结合使用的
const uniqueNames2 = [...new Set(nameArray)];
console.log(uniqueNames2);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.add(25);
ages.delete(25);

console.log(ages);
console.log(ages, ages.size);
console.log(ages.has(30), ages.has(25));//true and false

ages.clear();
console.log(ages);


const ninjas = new Set([
    {name: 'shaun', age: 30},
    {name: 'crystal', age: 29},
    {name: 'chun-li', age: 32},
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});
