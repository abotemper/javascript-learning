//fetch api
//this is the new way, last chapter is old way, just to explain the chaining promises

//first we fetch the data, then we take the response and we return response.json
//then get the data

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response);
//     return response.json();//.json get data and parse it,return a promise
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);

// });

const getTodos = async () => {
    const response = await fetch('todos/luigis.json');//if this step has some problems, it will still resolved
    // still has a response, its not json problems
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }//will stop,

    // console.log(response);
    const data = await response.json();
    // console.log(data);


    return data;


};

// const test = getTodos();
// console.log(test);//we will see a promise in the log 

// getTodos();

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected', err.message));

console.log(3);
console.log(4);