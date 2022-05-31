//Async Javascript

//governs how we perform tasks which take some time to complete
//(e.g. getting data from a database)
//start something now and finish it later
//javascript can run one statement at a time 
//从上至下执行

console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
},2000);//when 1234 finished, then we call this function,
//so we just hanlde this function out of this thread somewhere else in the browser

console.log(3);
console.log(4);


//http requests
//make http requests to get data from another server

//we make there requests to api endpoints
