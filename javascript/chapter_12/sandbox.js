const userOne = {
    username: 'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
    username: 'chun li',
    email: 'chunli@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();
//we cant reuse it properly,although it is a good way to create one or two object

// const userThree = new User('shaun@thentninja.co.uk', 'shaun');

//a class is like a blueprint
//it has properties (colour, size)and functionality(drive, reverse)


//protoco
class User{
    constructor(username,email){//constructor是在调用是传参用的
        //set up properties
        this.username = username;
        this.email = email;
        this.score = 0;

    }//在class里 不用分号

    //use a regular function using shorthand notation ,
    //we dont use arrow function,because arrow functons dont buy the value to the this keyword when the 
    //code we'va seen in the past and,'this' is the function itself would refer to the window object now instead

    login(){
        console.log(`${this.username} just login `);
        return this;
    }
    logout(){
        console.log(`${this.username} just logout `);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has the score of ${this.score}`);
        return this;//allow we we use chaning

    }

}

const user1 = new User('mario', 'mario@thenetninja.co.uk');
const user2 = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(user1, user2);
user1.logout();
user2.login();

user1.incScore();

// user1.login().logout();  user1.login()is not defined

user1.incScore().incScore();// we cant without return this

user2.login().incScore().incScore().logout();

//the 'new' keyword
//1 - it creates a new empty object {}
//2 - it binds the value of 'this' to the new empty object
//3 - it calls the constructor function to 'build' the object

// const user1 = new User();
// const user2 = new User();

class Admin extends User{
    constructor(username,email,title){
        super(username, email);//we have to super , then we can have our own properties
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.username !== user.username);
    }

}

const user3 = new Admin('shaun','shaun@asdasdasd','black-belt-nin');
console.log(user3);
let users = [user1, user2, user3];
console.log(users);

user3.deleteUser(user2);

console.log(users)

//user1 and user2 doesnt have delete method

//old way
function UserF(username, email){
    this.username = username;
    this.email = email;
    // this.login = function (){
    //     console.log(`${this.username} has logged in`);
    // };
}

const user4 = new UserF('mario', 'mario@thenetninja.co.uk');
console.log(user4);
// console.log(user4.login());

//prototypes 
//every object in javascript has a prototype
//prototypes contain all the methods for that object type

//properties 是直接储存在每个实例中的， 但是prototypes， 也就是实例内部的函数是指针指向对象的prototypes中的
//就一个 ，通过指针指过去的。这些方法都相同，所以不需要都有，properties更个性化，所以都有

UserF.prototype.login = function(){
    console.log(`${this.username} has logged in`);
};//this is the way to add method to a object

UserF.prototype.hahaha = function(){
    console.log('无情辣少');
}
user5 = new UserF('wuqing', 'lashao');
user5.hahaha();

function Admin1(username, email, title){
    UserF.call(this, username, email);
    this.title = title;
}
const user6 = new Admin1('shaun','shaun@asdasdasd','gangan');
console.log(user6);

Admin1.prototype = Object.create(UserF.prototype);//直接继承的方法
//下面是专属这个admin 的方法
Admin1.prototype.deleteUser = function(){
    //delete a user
};

//比如建立一个array，array内部最外层有一堆prototypes, 内部还有一个object prototypes
//单独建立一个object，这个object prototypes 和 上面那个一样
//可以说万物心中有对象，
//所以说所有的东西基本都继承了object， 然后他们自己又有一些花里胡哨单独的东西。
//这叫原型链

