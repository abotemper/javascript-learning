//dates & times

const before = new Date('May 1 2022 7:30:59');
const now = new Date();


console.log(now);
console.log(typeof(now));
//year, month ,day ,times
console.log('getFullYear:', now.getFullYear());
console.log('getmonth:', now.getMonth());
console.log('getdate:', now.getDate());
console.log('getday:', now.getDay());
console.log('gethours:', now.getHours());
console.log('getminiute:', now.getMinutes());
console.log('getsec:', now.getSeconds());

//timetamps
console.log('timestamp: ', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);// time stamp / 1000 == 1  sec
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

const timestamp = 1675938474990;

console.log(new Date(timestamp));





