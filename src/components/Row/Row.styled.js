import styled from 'styled-components';

const StyledRow = styled.tr`
    padding: 1rem;
    border: solid 1px rgb(var(--color-line));
    & > td, th {
        padding: 1rem;
    }
`

export default StyledRow;