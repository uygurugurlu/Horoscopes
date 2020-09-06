import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyCmAK2v3suIqRdtmKLBe7ARnRyOxAnhnaM',
  authDomain: 'horoscopes-e097b.firebaseapp.com',
  databaseURL: 'https://horoscopes-e097b.firebaseio.com/',
  projectId: 'horoscopes-e097b',
  storageBucket: 'gs://horoscopes-e097b.appspot.com',
  messagingSenderId: 'XXXXXXX',
};
let app = Firebase.initializeApp(config);
export const db = app.database();
