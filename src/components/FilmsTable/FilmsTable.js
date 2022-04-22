import React  from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

import StyledFilmsTable from './FilmsTable.styled';

const FilmsTable = ({films}) => {

    const columnsNames = [
        {name: '', desc: ''},
        {name: 'title', desc: 'Tytuł'},
        {name: 'genre', desc: 'Gatunek'},
        {name: 'performance', desc: 'Wykonanie'},
        {name: 'year', desc: 'Rok'}
    ]

    return (
        <StyledFilmsTable>
            <TableHeader fields={columnsNames}/>
            <TableBody films={films} colNames={columnsNames}/>
        </StyledFilmsTable>
    )
}

FilmsTable.propTypes = {
    films: PropTypes.array
}

export default FilmsTable;