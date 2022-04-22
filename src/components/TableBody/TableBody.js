import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row/Row';

// import StyledTableBody from './TableBody.styled';

const TableBody = ({ films, colNames }) => {
    return (
        <tbody>
            <Row>
                {colNames.map(({ name }) => <td key={name}>{name && <input />}</td>)}
            </Row>
            {films.map((film, ind) => {
                const { title, genre, performance, year } = film;
                return (
                    <Row key={ind}>
                        <td>{ind + 1}</td>
                        <td>{title}</td>
                        <td>{genre}</td>
                        <td>{performance.join(", ")}</td>
                        <td>{year}</td>
                    </Row>
                )
            })}
        </tbody>
    )
}

TableBody.propTypes = {
    films: PropTypes.array,
    colNames: PropTypes.array
}

export default TableBody;