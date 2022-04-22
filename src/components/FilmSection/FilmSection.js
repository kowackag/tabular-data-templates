import React from 'react';

import FilmsTable from '../FilmsTable/FilmsTable';

import db from '../../db/db.json';

const FilmSection = () => {

    return (
        <FilmsTable films={db}/>
    )
}

export default FilmSection;