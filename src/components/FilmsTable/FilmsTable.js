import React  from 'react';
import PropTypes from 'prop-types';

import TableHeader from '../TableHeader';

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
        </StyledFilmsTable>
    )
}

FilmsTable.propTypes = {
    films: PropTypes.array
}

export default FilmsTable;