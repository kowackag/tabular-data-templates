import styled, {css} from 'styled-components';

const StyledSearch = styled.div`
    display: inline-block;
    margin: 2rem 0;
    border-bottom: 2px solid rgb(var(--color-alfa));
    font-size: 1.4rem;
    color: rgb(var(--color-alfa));

    & input {
        display: inline-block;
        padding: 1rem;
        outline: none;
        border: none;
        width: 80%;
        color: rgb(var(--color-alfa));

        &+svg {
            fill-opacity:0;
            &:hover {
                cursor: pointer;
            }
        }

        &:focus+svg{
            fill-opacity:1;
        }

        &:-webkit-autofill {
            box-shadow: inset 12px 12px 36px white, inset -12px -12px 36px white;
            -webkit-text-fill-color: rgb(var(--color-font)) !important;
        }
    }

    ${props=>props.inTable && css`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        border-bottom: 2px dotted rgb(var(--color-line));
        color: rgba(var(--color-font), 0.5);
        & input {
            color: rgb(var(--color-font));
        }  
    `}

`

export default StyledSearch;