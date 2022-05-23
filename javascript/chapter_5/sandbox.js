//object literals
const blogs = [
    {title:'why mac & cheese rules',likes: 30},
    {title:'10 things to make with ', likes: 50}
];
console.log(blogs);


let user = {
    name:'crystal',
    age:30,
    email:'tainbo152@gmail.com',
    location:'berlin',
    blogs:[
        {title:'why mac & cheese rules',likes: 30},
        {title:'10 things to make with ', likes: 50}
    ],
    
    login:function(){
        console.log('the user logged in');
    },
    logout:() => {
        console.log('the user logged out')
        console.log(this);//we can not use 'this' in arrow version
    },
    logBlogs:function(){
        // console.log(blogs);it will not work,so we use a this
       console.log(this.blogs);
       console.log('this user has written the following blogs: ');
       this.blogs.forEach(blog => {
           console.log(blog.title, blog.likes);
       });
       console.log(this);
    },
    sayHello(){
        console.log(
            "this is a simplified version of a function in an object, and it can use 'this',");
        console.log('you can see this here: ',this.name,this);

    }//simplified version of function,we take away the 'function'

    //if we want to use 'this' in an object, we have to use the key word 'function'
    //version of function, not an arrow version.
    //but, we can can simplify the first version of function
};
console.log(user);
console.log(user.name);
console.log(user.age);
user.age = 35;
console.log(user.age);


console.log(user['name']);
console.log(user['email']);

user['name'] = 'timber';

console.log(user['name']);

const key = 'location';
user.key

console.log(typeof user);

//object literals
user.login();
user.logout();
user.logBlogs();
// console.log(this);

user.sayHello();

//math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area));//float to 8
console.log(Math.floor(area));//floor to 7
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random);//betweem 0 - 1;
console.log(Math.round(random * 100));//round to an integer

//primitive types:
//numbers,strings,booleans,null,undefined,symbols

//reference types:
//all types of objects,object literals,arrays,functions,dates,all other objects

//stack & heap 堆栈和堆
//primitive type store in stack, reference types store in heap

//普通变量通过变量名直接在堆栈中访问，引用类型的变量名的地址储存在堆栈中，通过指针访问在堆中的引用类型
//原始普通变量通过赋值直接在堆栈中创建一个新的变量，后面再更改第一个变量，后创建的变量不会改变
//引用型变量如果通过赋值创建一个新的变量，我们只是把第一个变量的指针赋值给了第二个变量的指针。所以
//两个指针都指向一个引用型变量，如果更改引用型变量中的内容，两个变量都会相应变化

//example for primitive values
let score1 = 50;
let score2 = score1;

console.log(`score1: ${score1}`, `score2: ${score2}`);
score1 = 100;
console.log(`score1: ${score1}`, `score2: ${score2}`);

//example for reference values
userOne = {name: 'ryu', age: 30};
userTwo = userOne;
console.log('userone is: ',userOne);
console.log('usertwo is: ',userTwo);

userOne.age=35;
console.log('userone is: ',userOne);
console.log('usertwo is: ',userTwo);

