import React, {useState} from 'react';

import Search from '../Search/Search';
import FilmsTable from '../FilmsTable/FilmsTable';

import db from '../../db/db.json';

const FilmSection = () => {

    const [phrase, setPhrase] = useState('');

    const changeValue = (e) => {
        e.preventDefault();
        setPhrase(e.target.value);
    }

    return (
        <main>  
            <Search name="phrase" value={phrase} clear={()=>setPhrase('')} changeValue={changeValue} placeholder="Szukaj"table={false}/>
            <FilmsTable films={db}/>
        </main>
    )
}

export default FilmSection;