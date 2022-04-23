import React from 'react';

import TableNav from './TableNav/TableNav';

const TableFooter = () => {
    return (
        <tfoot>
            <tr><td colSpan="6"><TableNav/></td></tr>
        </tfoot>
    )
}

export default TableFooter;