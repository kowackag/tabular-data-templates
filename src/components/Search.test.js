import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../components/Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from "@fortawesome/free-solid-svg-icons";

describe('Search', ()=>{
    test('check if phrase field exist', () => {
        render (<Search name="phrase" clear={()=>setPhrase('')} placeholder="Szukaj"/>);

        const phraseField = screen.getByPlaceholderText(/Szukaj/i);
        expect(phraseField).toBeInTheDocument();
    })  

    test('check if icon exist', () => {
        const {container} = render (<Search/>);

        const clearButton = container.querySelector(".fa-x");
        expect(clearButton).toBeInTheDocument();
    })  

    test('check if phrase field is cleared', async () => {
        const mockFn = jest.fn();
        mockFn.mockReturnValue(false);

        const {container} = render(<Search name="phrase" clear={mockFn} placeholder="Szukaj"></Search>);

        const phraseField = screen.getByPlaceholderText(/Szukaj/i);
        userEvent.type(phraseField, 'phrase');
        
        await waitFor(() => {
            const clearButton = container.querySelector(".fa-x");
            userEvent.click(clearButton);
        })
        expect(phraseField.value).toBe('');
    })  
})