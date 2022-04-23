import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {SortContext} from '../../context';

import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody';

import StyledFilmsTable from './FilmsTable.styled';

const FilmsTable = ({films}) => {
    const [sortedWay, setSortedWay] = useState('');
    const columnsNames = [
        {name: '', desc: ''},
        {name: 'title', desc: 'Tytuł'},
        {name: 'genre', desc: 'Gatunek'},
        {name: 'performance', desc: 'Wykonanie'},
        {name: 'year', desc: 'Rok'}
    ]

    return (
        <SortContext.Provider value={[sortedWay, setSortedWay]}>
        <StyledFilmsTable>
            <TableHeader fields={columnsNames}/>
            <TableBody films={films} colNames={columnsNames}/>
        </StyledFilmsTable>
        </SortContext.Provider>
    )
}

FilmsTable.propTypes = {
    films: PropTypes.array
}

export default FilmsTable;