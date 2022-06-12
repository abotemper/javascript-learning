import {styleBody, addTitle,contact } from './dom';
import users, { getPremUsers } from './data';

console.log('index file');

addTitle('text');

styleBody();

console.log(contact);

console.log(users);

const preUsers = getPremUsers(users);
console.log(preUsers);

console.log('test4');
console.log('test5');
console.log('test5');
console.log('test6');
