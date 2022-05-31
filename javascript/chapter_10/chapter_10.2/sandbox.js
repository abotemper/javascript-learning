//下面这个是函数的定义
//要调用这个函数必须给其传入 另一个函数 ' callback ' 作为参数， 才能顺利 调用
//
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    //console.log(request,request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            //we can see the array not the string if we parse it
            callback(undefined, data);
            console.log(request.responseText);
        }else if(request.readyState === 4){
            callback('could not fetch data',undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    //if its wrong, even it get 4 stage, status will be 404, response text will be null
    request.send();
    
    //we can use our own json file
    // request.open('GET', 'todo.json');
    // //if its wrong, even it get 4 stage, status will be 404, response text will be null
    // request.send();

};

//下面这个可以明显看到异步的执行

console.log(1);
console.log(2);
//定义函数之后还可以在调用函数时玩一些花活

//因为定义中我们要给其传入一个函数作为参数
//用箭头版本 传入函数参数即为：
// //(err, data) => {
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

//当函数执行到第10行时，就用一下这个函数，给这个函数参数传入两个参数，一个undefined，一个正常
//这样走入函数参数中的if中时就可以log一些东西
getTodos((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log(3);
console.log(4);

// JSON is just a string, looks like a array contains lots of object
//when we create our own json, the name of keys  be quote by double qoute ""
//if value is a string, it should be quote by "" too


const getTodos1 = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
            console.log(request.responseText);
        }else if(request.readyState === 4){
            callback('could not fetch data',undefined);
        }
    });

    request.open('GET', resource);
    request.send();
    
};
//order, but this is a callback hell
// getTodos1('todos/luigi.json',(err, data) => {
//     console.log(data);
//     getTodos1('todos/mario.json',(err, data) => {
//         console.log(data);
//         getTodos1('todos/shaun.json',(err, data) => {
//             console.log(data);
//         });
//     });
// });

//promise example

const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        // resolve('some data');
        reject('some error');

    });
};
//下面这里then中把两个函数当做参数
getSomething().then((data) => {
    console.log(data);
},(err) => {
    console.log(err);
});

//better
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//so 


//resolve and reject are two functions,receive a single parameter.
//resolve is defined in then
//reject is defined in catch
const getTodos2 = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            }else if(request.readyState === 4){
                reject('error getting resource');
            }
        });
    
        request.open('GET', resource);
        request.send();

    });

    
};
//让程序按顺序出牌
//哪一步出错了，直接转到catch，不执行后续部分
getTodos2('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos2('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos2('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected: ', err);
});