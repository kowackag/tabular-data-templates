import React, {useContext} from 'react';

import { PaginationContext } from '../../context';

import StyledTableNav from './TableNav.styled';

const TableNav = () => {
    const {page, setPage, pages} = useContext(PaginationContext);
    
    const buttons = (new Array(pages).fill(0)).map((item, index) => 
        <li key={index}>
            <button onClick={()=>setPage(index+1)}>{index +1}</button>
        </li>
    );

    return(
        <StyledTableNav page={page}><ul>{buttons}</ul></StyledTableNav>
    )
} 

export default TableNav;