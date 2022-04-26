import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';

import {SortContext} from '../context.js';
import {getFilteredItems, sortItems} from '../helpers';

import Row from './Row/Row';
import Search from './Search/Search';
import Pagination from './Pagination';

const TableBody = ({ data, colNames }) => {
    const [sortedWay] = useContext(SortContext);
    const init = {
        col_2: '',
        col_3: '',
        col_4: '',
        col_5:''
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

    const filteredItems = getFilteredItems(data, searchData);
    
    const sortedItems = sortItems(filteredItems, sortedWay)

    return (
        <tbody>
            <Row>
                {colNames.map(({ name }) => <td key={name}>{name && <Search name={name} value={searchData[name]} changeValue={changeValue} clear={clearValue} inTable={true}/>}</td>)}
            </Row>
            {sortedItems.length ===0 ? <Row><td colSpan={5}>Brak wyszukiwanych elementów</td></Row>
                : <Pagination>
                    {sortedItems.map((item, ind) => {
                    const { col_2, col_3, col_4, col_5 } = item;
                    return (
                        <Row key={ind}>
                            <td>{ind + 1}</td>
                            <td>{col_2}</td>
                            <td>{col_3}</td>
                            <td>{col_4}</td>
                            <td>{col_5}</td>
                        </Row>
                    )
                })}
                </Pagination>
            }
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array,
    colNames: PropTypes.array
}

export default TableBody;