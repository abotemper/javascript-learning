import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    getDocs,
    collection,
    addDoc,
    deleteDoc,
    onSnapshot,
    doc,
    query,
    where,
    orderBy,
    serverTimestamp,
    getDoc,//get single doc
    updateDoc,
    Timestamp
}from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyfKySfVes8RzeMH48QehbJwu3RR2S6ZE",
    authDomain: "chatroom-f8edb.firebaseapp.com",
    projectId: "chatroom-f8edb",
    storageBucket: "chatroom-f8edb.appspot.com",
    messagingSenderId: "1037290179385",
    appId: "1:1037290179385:web:8d6ed2692bfb7a47e2b6e8"
  };
//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();


//collection ref
//相当于整个表格的合集
const colRef = collection(db, 'chats');

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = colRef;
        this.unsub 
    }
    async addChat(message){
        //format a chat object
        const now = new Date();
        const chat = {
            created_at: Timestamp.now(),
            message: message,
            username: this.username,
            room: this.room,
        };
        //save the chat document
        const response = await addDoc(this.chats, chat);
        return response;
    }
    getChats(callback){
        const q = query(this.chats, where("room", "==", this.room), orderBy('created_at'));
        this.unsub = onSnapshot(q, (snapshot) => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    //update the ui
                    console.log(change.doc.data());
                    callback(change.doc.data());
                }
            });

        });
    };
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        console.log("room updated");
        if(this.unsub){
            this.unsub();
        }
        
    }
}

export { Chatroom };