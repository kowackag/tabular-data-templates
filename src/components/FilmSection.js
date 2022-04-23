import React, {useState} from 'react';

import db from '../db/db.json';
import { getFilmsWithPhrase } from '../helpers';

import Search from './Search/Search';
import FilmsTable from './FilmsTable/FilmsTable';

const FilmSection = () => {
    const [phrase, setPhrase] = useState('');

    const changeValue = (e) => {
        e.preventDefault();
        setPhrase(e.target.value);
    }

    const copyDb = getFilmsWithPhrase(db, phrase);

    return (
        
            <main>  
                <Search name="phrase" value={phrase} clear={()=>setPhrase('')} changeValue={changeValue} placeholder="Szukaj"/>
                <FilmsTable films={copyDb} limit="6"/>
            </main>

    )
}

export default FilmSection;