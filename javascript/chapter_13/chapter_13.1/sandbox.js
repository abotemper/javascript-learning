//rest parameter
const double = (num1, num2, num3) => {
    //do something
    console.log(num1, num2, num3);
}
const resultDouble = double(1, 2, 3);

//in case we dont know how many parameters we have
const doubleRest = (...nums) => {
    //do something
    console.log(nums);//its an array,如果接收的是一系列数，直接返回一个array

    return nums.map(num => num*2);
}



const resultDoubleRest = doubleRest(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(resultDoubleRest);



//spread syntax (arrays)
const people = ['shaun', 'ryu', 'crystal'];//如果接受的是一个array，那他会去掉array的括号
//相当于把array中的每个元素拿出来逐个log，在一个console中
console.log(...people);

const members = ['mario', 'chun-li', ...people];//如果他在一个array中，他会去掉本身的[]然后所有元素加入这个array
console.log(members);



//spread syntax (objects)

//对象是个引用类型，只会创建一次，其余的都是通过指针指向它
//比如你直接用=赋值给一个变量，其实就是通过指针指向这个原来的对象
const person = { name: 'shaun', age: 30, job: 'netninja'};

//但是下面的方法就可以完全复制创建一个新对象

const personClone = {...person};
const person2 = person;
console.log(personClone);
person.age = 40;
console.log(personClone,person2);

const personClone2 = {...person, location: 'dublin'};
console.log(personClone, person2, personClone2);