import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {SortContext, PaginationContext} from '../../context';

import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';

import StyledTable from './Table.styled';

const Table = ({data, limit, colNames}) => {
    const [sortedWay, setSortedWay] = useState('');
    
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(data.length);
    
    return (
        <SortContext.Provider value={[sortedWay, setSortedWay]}>
            <PaginationContext.Provider value={{
                page: page,
                setPage: setPage,
                pages: pages,
                setPages: setPages,
                limit: limit
            }}>
                <StyledTable>
                    <TableHeader fields={colNames}/>
                    <TableBody data={data} colNames={colNames}/>
                    <TableFooter/>
                </StyledTable>
            </PaginationContext.Provider>
        </SortContext.Provider>
    )
}

Table.propTypes = {
    data: PropTypes.array,
    colNames: PropTypes.array
}

export default Table;