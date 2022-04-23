import styled from 'styled-components';

const StyledRow = styled.tr`
    padding: 1rem;
    border: solid 1px rgb(var(--color-line));
    & > td, th {
        padding: 1rem;
    }

    & td:last-child {
        width: 12rem;
    }
`

export default StyledRow;