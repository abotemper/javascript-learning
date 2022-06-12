import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs,onSnapshot,
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA9EFNkOHTEC4BmApljuiIGYnE_KKDAsZs",
    authDomain: "fir-9-dojo-14707.firebaseapp.com",
    projectId: "fir-9-dojo-14707",
    storageBucket: "fir-9-dojo-14707.appspot.com",
    messagingSenderId: "880913566764",
    appId: "1:880913566764:web:1fbcd49654d8b92f3a1589"
  };



// init firebase app
initializeApp(firebaseConfig)
const auth = getAuth()

//init services
const db = getFirestore()

//collection ref

const colRef = collection(db, 'books')

//queries
const q = query(colRef, orderBy('createdAt'))

//get collection data
// getDocs(colRef)
//    .then((snapshot) => {
//     //    console.log(snapshot.docs)
//        let books = []
//        snapshot.docs.forEach((doc) => {
//            books.push({ ...doc.data(), id: doc.id })
//        })
//        console.log(books)
//    })
//    .catch(err => {
//        console.log(err.message)
//    })

//get real collection data
//we dont need to refresh
const unsubCol = onSnapshot(q, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})


// adding documents

const addBookForm = document.querySelector(".add")
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
    .then(() => {
        addBookForm.reset()
    })
})

//deleting documents
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit',(e) => {
    e.preventDefault()
    //local
    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
       .then(() => {
           deleteBookForm.reset()
       })
})

//get a single document
const docRef = doc(db, 'books', 'G6DbEjRPpgpFSDiPmEzW')

getDoc(docRef)
   .then((doc) => {
       console.log(doc.data(), doc.id)
   })

const unsunDoc = onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

//updating a document

const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', updateForm.id.value)
    updateDoc(docRef, {
        title: 'updated title'
    })
    .then(() => {
        updateForm.reset()
    })
})

//signing users up

const signupForm = document.querySelector('.signup')
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = signupForm.email.value
    const password = signupForm.password.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user created: ',cred.user)
            signupForm.reset()
        })
        .catch((err) => {
            console.log(err.message)
        })
})

//loginng in and out

const logoutButton = document.querySelector('.logout')
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            // console.log('the user signed out')
        })
        .catch((err) => {
            console.log(err.message)
        })
})

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            // console.log('user logged in: ', cred.user)
        })
        .catch((err) =>{
            console.log(err.message)
        })
})

//subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, (user) => {
    console.log('user status changed: ', user)
})

//unsubscribing from changes (auth & db)

const unsubButton = document.querySelector('.unsub')
unsubButton.addEventListener('click', () => {
    console.log('unsubscribing')
    unsubCol()
    unsunDoc()
    unsubAuth()
})