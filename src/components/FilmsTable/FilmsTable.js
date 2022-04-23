import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {SortContext, PaginationContext} from '../../context';

import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';

import StyledFilmsTable from './FilmsTable.styled';

const FilmsTable = ({films, limit}) => {
    const [sortedWay, setSortedWay] = useState('');
    const columnsNames = [
        {name: '', desc: ''},
        {name: 'title', desc: 'Tytuł'},
        {name: 'genre', desc: 'Gatunek'},
        {name: 'performance', desc: 'Wykonanie'},
        {name: 'year', desc: 'Rok'}
    ]

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(films.length);
    
    return (
        <SortContext.Provider value={[sortedWay, setSortedWay]}>
            <PaginationContext.Provider value={{
                page: page,
                setPage: setPage,
                pages: pages,
                setPages: setPages,
                limit: limit
            }}>
                <StyledFilmsTable>
                    <TableHeader fields={columnsNames}/>
                    <TableBody films={films} colNames={columnsNames}/>
                    <TableFooter/>
                </StyledFilmsTable>
            </PaginationContext.Provider>
        </SortContext.Provider>
    )
}

FilmsTable.propTypes = {
    films: PropTypes.array
}

export default FilmsTable;