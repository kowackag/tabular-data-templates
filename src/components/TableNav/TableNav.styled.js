import styled from 'styled-components';

const StyledNav = styled.nav`

    & ul {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    & li {
        list-style: none;
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
        }
    }

    & li:nth-child(${props=>props.page}) button {
        font-weight: bold;
    }

`
export default StyledNav;