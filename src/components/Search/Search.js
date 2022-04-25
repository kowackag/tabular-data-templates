import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faX} from "@fortawesome/free-solid-svg-icons";

import StyledSearch from './Search.styled';

const Search = ({clear, changeValue, name, value, placeholder, inTable}) => {
    return (
        <StyledSearch inTable={inTable}>
            <label htmlFor={name}>{inTable||<FontAwesomeIcon icon={ faMagnifyingGlass}/>}</label>
            <input id={name} name={name} value={value} placeholder={placeholder} onChange={changeValue}/>
            <FontAwesomeIcon data-name={name} icon={faX} onClick={clear}/>
        </StyledSearch>
    )
}

Search.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    clear: PropTypes.func,
    changeValue: PropTypes.func,
    inTable: PropTypes.bool
}

export default Search;