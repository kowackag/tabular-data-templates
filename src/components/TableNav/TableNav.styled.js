import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    list-style: none;

    & li {
        margin: 1rem;
        & button {
            border: none;
            background-color: transparent;
            padding: .8rem;
            font-size: 1.5rem;
            color: rgb(var(--color-alfa));

            :hover {
                cursor: pointer;
            }
            :focus{
                font-weight: bold;
            }
        }
    }
`
export default StyledNav;