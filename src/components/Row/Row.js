import React from 'react';
import PropTypes from 'prop-types';

import StyledRow from './Row.styled';

const Row = ({children}) => {
    return (
        <StyledRow>{children}</StyledRow >
    )
}

Row.propTypes = {
    children: PropTypes.node
}

export default Row;