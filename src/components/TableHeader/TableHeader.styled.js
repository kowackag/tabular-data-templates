import styled from 'styled-components';

const StyledTableHeader = styled.thead`
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-beta));
    & th {
        & > div {
            display: flex; 
            align-items: center;
            & p {
                display: inline-block;
                margin-right: 1rem;
            }
        }
    }
`

export default StyledTableHeader;