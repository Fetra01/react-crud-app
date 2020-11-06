import React, { useState, useContext} from 'react';
import firebase from '../utils/firebaseConfig'
import { UidContext } from './UidContext'

const Create = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    
    const uid = useContext(UidContext);
    
    const createQuote = () => {
        const quotesDB = firebase.database().ref("quotesDB")
        const quote = {
            uid,
            author,
            text,
        };

        quotesDB.push(quote);

        setAuthor('');
        setText('');
    }


    return (
        <div className="create">
            <h4>Déposer une citation</h4>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <textarea
                    placeholder="Citation"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={createQuote}>Créer</button>
            </div>
        </div>
    );
};

export default Create;