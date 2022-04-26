import React, {useContext} from 'react';

import {SortContext} from '../../context.js';

import Row from './../Row/Row';
import SortBlock from '../SortBlock/SortBlock';

import StyledTableHeader from './TableHeader.styled';

const TableHeader = ({fields}) => {
    const [sortedWay, setSortedWay] = useContext(SortContext);

    const sortUp = (e) => {
        setSortedWay({ ...sortedWay, 
            name: e.currentTarget.dataset.name,
            type: "up"
        })
    }

    const sortDown = (e) => {
        setSortedWay({ ...sortedWay, 
            name: e.currentTarget.dataset.name,
            type: "down"
        })
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