import React from 'react';

import Row from './../Row/Row';
import SortBlock from '../SortBlock/SortBlock';

import StyledTableHeader from './TableHeader.styled';

const TableHeader = ({ fields }) => {

    const sortUp = (e) => {
        console.log(e.currentTarget)
    }

    const sortDown = (e) => {
        console.log(e.currentTarget)
    }

    return (
        <StyledTableHeader>
            <Row>
                {fields.map(({ name, desc }) =>
                    <th key={name}>
                        <div>
                            <p>{desc}</p>
                            {name && <SortBlock name={name} sortUp={sortUp} sortDown={sortDown} />} 
                        </div>
                    </th>
                )}
            </Row>
        </StyledTableHeader>
    )
}

export default TableHeader;