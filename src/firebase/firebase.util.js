import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDurdJ75W991JpuJLWrR2k1GknXfbpVXa4",
    authDomain: "stopshop-44251.firebaseapp.com",
    projectId: "stopshop-44251",
    storageBucket: "stopshop-44251.appspot.com",
    messagingSenderId: "924811597221",
    appId: "1:924811597221:web:41017192f227d794db444c",
    measurementId: "G-Q3SCD90414"
  }

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user');
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj=>{
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    });
    return await batch.commit()
  }

  export const converCollectionSnapshotToMap=(collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
      const {title,items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    })
    return transformedCollection.reduce((acc,collection)=>{
      acc[collection.title.toLowerCase()] = collection;
      return acc
    },{})
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;