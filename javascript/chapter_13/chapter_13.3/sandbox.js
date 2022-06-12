const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1, symbol2, typeof symbol1);
console.log(symbol1 === symbol2);

const symbol3 = Symbol('tianbo');
const symbol4 = Symbol('tianbo');
console.log(symbol3 === symbol4);//false
//虽然都是symbol 但是 都不相等

const ninja = {};
ninja.age = 30;
ninja['belt'] = 'orange';
ninja['belt'] = 'black';//覆盖了
console.log(ninja);

ninja[symbol1] = 'ryu';
ninja[symbol2] = 'tianbo';
ninja[symbol3] ='tianbo'
console.log(ninja);
