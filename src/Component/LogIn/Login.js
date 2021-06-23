import React from 'react';
import firebaseConfig from './firebaseConfig' 
import firebase from 'firebase/app'
const Login = () => {
    if (firebase.app.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    return (
        <div>
            
        </div>
    );
};

export default Login;