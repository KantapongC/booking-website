import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBCNk1YMxtbA7i0euf_pSOBE7a_NsvyIQg',
	authDomain: 'mol-salon-app.firebaseapp.com',
	databaseURL: 'https://mol-salon-app.firebaseio.com',
	projectId: 'mol-salon-app',
	storageBucket: 'mol-salon-app.appspot.com',
	messagingSenderId: '297360646891',
	appId: '1:297360646891:web:a657ee8635c4f5f9aa14ae',
	measurementId: 'G-M2NXG2XNFD'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore(); // settings so console does not complain

export default firebase;
