const now =new Date();
// const now =new Date(7362462363);// false
console.log(dateFns.isToday(now));

//formatting options

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

//comparing dates

const before = new Date('April 1 2022 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix:true}));