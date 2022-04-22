import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Row from '../Row/Row';

// import StyledTableBody from './TableBody.styled';

const TableBody = ({ films, colNames }) => {

    const init = {
        title: '',
        genre: '',
        performance: '',
        year:''
    }

    const [searchData, setSearchData] = useState(init)

    const changeValue = (e) => {
        e.preventDefault();
        setSearchData({...searchData, [e.target.name]: e.target.value})
    }

    const copyFilms = films.filter(({title, genre, year, performance}) => title.toUpperCase().includes(searchData.title.trim().toUpperCase()) && genre.toUpperCase().includes(searchData.genre.trim().toUpperCase()) && performance.join('').toUpperCase().includes(searchData.performance.trim().toUpperCase()) && year.toString().includes(searchData.year.trim()));

    return (
        <tbody>
            <Row>
                {colNames.map(({ name }) => <td key={name}>{name && <input name={name} value={searchData[name]} onChange={changeValue}/>}</td>)}
            </Row>
            {copyFilms.map((film, ind) => {
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