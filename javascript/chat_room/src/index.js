import "./styles.css";
import { ChatUI } from './ui';
import { Chatroom } from "./chat";

//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');


//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));

})

//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide the update  message
    updateMssg.innerText = `your name was updated to ${newName}`;
    //三秒后消失
    setTimeout(() => updateMssg.innerText='', 3000); 

})

//update the chat room
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    } 
});
//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

chatroom.getChats(data => chatUI.render(data));




// onSnapshot(colRef, (snapshot) => {
//     let books = []
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id})
//     })
//     console.log(books);
// });













//querries
// const q = query(colRef, where("tianbo", "==", "hahaha"), orderBy('dibo','desc'));

//get collection data
//每一个具体对象
// getDocs(colRef)
//     .then((snapshot) => {
//         let books = [];
//         snapshot.forEach((doc) => {
//             books.push({...doc.data(), id: doc.id})
//         })
//         console.log(books);
//     })
//     .catch(err => {
//         console.log(err.message);

//     });



    // addDoc(colRef,{
    //     tianbo:aaaa,
    //     dibo:bbbb,
    //     timber:cccc,
    //     albert:dddd
    // })
    //     .then(() => {element.reset})

        // const docRef = doc(db, 'books', element.id.value)
    //    deleteDoc(docRef)
            //  .then(() => {
            //     element.reset()
            //  })


//realtime collection data
// onSnapshot(colRef, (snapshot) => {
//     let books = []
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id})
//     })
//     console.log(books);
// });
// onSnapshot(q, (snapshot) => {
//     let books = []
//     snapshot.docs.forEach((doc) => {
//         books.push({...doc.data(), id: doc.id})
//     })
//     console.log(books);
// });

// const docRef = doc(db, 'books', 'fzDnNhZ9qMPcHmAokWAx');

// getDoc(docRef)
//     .then((doc) => {
//         console.log(doc.data(), doc.id)
//     });

//     //this is a real time version
// onSnapshot(docRef, (doc) => {
//     console.log(doc.data(), doc.id);
// });

// updateDoc(docRef, {
//     tianbo: "hahahaha"
// }).then(() => {Element.reset()})

// const auth = getAuth();
// const email = element.email.value;
// const password
// createUserWithEmailAndPassword(auth, email, password)
//   .then ((cred) => {
//         console.log('user created: ', cred.user)
//         Element.reset()
// })
    // .catch((err) => {
    //     console.log(err.message)
    // })

    // signOut(auth)
    // .then(() => {
    //     console.log()
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // });

    // signInWithEmailAndPassword(auth, email, passworld)
    //     .then((cred) => {
    //         console.log('user loggin', cred.user);
    //     })
           // .catch((err) => {
    //     console.log(err.message);
    // });

// onAuthStateChanged(auth, (user) => {
//     console.log('user state changed')

// })