import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import {SortContext} from '../context.js';
import {getFilteredFilms, sortFilms} from '../helpers';

import Row from './Row/Row';
import Search from './Search/Search';

const TableBody = ({ films, colNames }) => {
    const [sortedWay] = useContext(SortContext);
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

    const clearValue = (e) => {
        e.preventDefault();
        setSearchData({...searchData, [e.currentTarget.dataset.name]: ''});
    }

    const filteredFilms = getFilteredFilms(films, searchData);
    
    const sortedFilms = sortFilms(filteredFilms, sortedWay)

    return (
        <tbody>
            <Row>
                {colNames.map(({ name }) => <td key={name}>{name && <Search name={name} value={searchData[name]} changeValue={changeValue} clear={clearValue} inTable={true}/>}</td>)}
            </Row>
            {sortedFilms.length ===0 ? <Row><td colSpan={5}>Brak wyszukiwanych elementów</td></Row>
                : sortedFilms.map((film, ind) => {
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
                })
            }
        </tbody>
    )
}

TableBody.propTypes = {
    films: PropTypes.array,
    colNames: PropTypes.array
}

export default TableBody;