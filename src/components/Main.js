import React from 'react';
import firebase from '../utils/firebaseConfig';
import Create from './Create';
import Read from './Read';

const Main = () => {
    return (
        <main>
            <nav>
                <h1>React Crud</h1>
                <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
                <button onClick={() => firebase.auth().signOut()}>Déconecter</button>
            </nav>

            <Create />
            <Read />
        </main>
    );
};

export default Main;