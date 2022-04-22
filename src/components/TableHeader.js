import React from 'react';

import SortBlock from './SortBlock/SortBlock';

const TableHeader = ({fields}) => {

    const sortUp = (e) => {
        console.log(e.target)
    }

    const sortDown = (e) => {
        console.log(e.target)
    }
    return (
        <thead>
            <tr>
                {fields.map(({name, desc})=>
                    <th key={name}>
                        <p>{desc}</p>
                        {name&&<SortBlock name={name} sortUp={sortUp} sortDown={sortDown}/>}
                    </th>
                )}
            </tr>
        </thead>
    )
}

export default TableHeader;