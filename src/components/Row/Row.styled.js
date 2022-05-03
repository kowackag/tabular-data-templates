import styled from 'styled-components';

const StyledRow = styled.tr`
    border: solid 1px rgb(var(--color-line));
    font-size: 1.4rem;
    & > td, th {
        padding: 1rem;
    }

    & td:nth-child(3), th:nth-child(3) {
       display:none;
    }

    & td:last-child {
        width: 5rem;
    }

    @media (min-width: 620px) {
        padding: 1.5rem;
        font-size: 1.6rem;
        & td:nth-child(3), th:nth-child(3) {
            display:table-cell;
        }
    }
`

export default StyledRow;