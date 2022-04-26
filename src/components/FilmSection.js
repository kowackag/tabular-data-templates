import React, {useState} from 'react';

import db from '../db/db.json';
import { getItemsWithPhrase } from '../helpers';

import Search from './Search/Search';
import Table from './Table/Table';

const FilmSection = () => {
    const [phrase, setPhrase] = useState('');

    const changeValue = (e) => {
        e.preventDefault();
        setPhrase(e.target.value);
    }

    const colNames = [
        {name: '', desc: ''},
        {name: 'col_2', desc: 'Tytuł'},
        {name: 'col_3', desc: 'Gatunek'},
        {name: 'col_4', desc: 'Wykonanie'},
        {name: 'col_5', desc: 'Rok'}
    ]

    const copyDb = [...db].map(({id, title, genre, performance, year})=>{
        return {
            id: id,
            col_2: title,
            col_3: genre,
            col_4: performance.join(", "),
            col_5: year
        }
    })
 
    const filmsWithPhrase = getItemsWithPhrase(copyDb, phrase);

    return (
        
            <main>  
                <Search name="phrase" value={phrase} clear={()=>setPhrase('')} changeValue={changeValue} placeholder="Szukaj"/>
                <Table data={filmsWithPhrase} limit="6" colNames={colNames}/>
            </main>
    )
}

export default FilmSection;