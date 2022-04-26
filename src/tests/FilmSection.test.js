import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilmSection from '../components/FilmSection';
import Table from '../components/Table/Table';
import Search from '../components/Search/Search';

describe('FilmSection', ()=>{
    test('check if all text field exist', () => {
        render (<FilmSection/>);

        const textFields = screen.getAllByRole('textbox');
        expect(textFields.length).toBe(5);
    })  

    test('check how filtering films works - displaying info when title does not exist', () => {
        render (<FilmSection/>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'phrase');

        const info = screen.getByText(/Brak wyszukiwanych elementów/i)
        expect(info).toBeInTheDocument();
    })  

    test('check how filtering films works - displaying title that is searched', () => {
        render (<FilmSection/>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'alfred');

        const title = screen.getByText(/ALFRED SCHREYER Z DROHOBYCZA/i)
        expect(title).toBeInTheDocument();
    })  
    
    test('check how filtering films works - displaying info that is no result', () => {
        render (<FilmSection/>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'alfred');

        const genreField = screen.getAllByRole('textbox')[2];
        userEvent.type(genreField, 'serial');

        const info = screen.getByText(/Brak wyszukiwanych elementów/i)
        expect(info).toBeInTheDocument();
    })  

    test('check how filtering films works - displaying correct numbers of matched films', () => {
        render (<FilmSection/>);

        const genreField = screen.getAllByRole('textbox')[2];
        userEvent.type(genreField, 'serial');

        const rows = screen.getAllByRole('row');

        expect(rows.length).toBe(6);    // +3 thead, search, tfoot
    })

// ---------------- filtering and searching---------------

    test('check how filtering and searching films works - displaying info that is no result', () => {
        render (<FilmSection/>);

        const performanceField = screen.getAllByRole('textbox')[3];
        userEvent.type(performanceField, 'fotosy');

        const phraseField = screen.getByPlaceholderText(/Szukaj/i);
        userEvent.type(phraseField, '1995');

        const info = screen.getByText(/Brak wyszukiwanych elementów/i)
        expect(info).toBeInTheDocument();
    })

    test('check how filtering and searching films works - displaying film title', () => {
        render (<FilmSection/>);

        const performanceField = screen.getAllByRole('textbox')[3];
        userEvent.type(performanceField, 'fotosy');

        const phraseField = screen.getByPlaceholderText(/Szukaj/i);
        userEvent.type(phraseField, '1993');

        const title = screen.getByText(/ŁOWCA. OSTATNIE STARCIE/i);
        expect(title).toBeInTheDocument();
    })

    test('check how filtering and searching films works - displaying correct number of films', () => {
        render (<FilmSection/>);

        const performanceField = screen.getAllByRole('textbox')[3];
        userEvent.type(performanceField, 'fotosy');

        const phraseField = screen.getByPlaceholderText(/Szukaj/i);
        userEvent.type(phraseField, '1993');

        const rows = screen.getAllByRole('row');

        expect(rows.length).toBe(4);    // +3 thead, search, tfoot
    })

// ---------------- clearing fields------------------

    test('check if title field is cleared', async () => {
        const mockFn = jest.fn();
        mockFn.mockReturnValue(false);

        const {container} = render(<FilmSection><Table/><Search clear={mockFn}/></FilmSection>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'phrase');
        
        await waitFor(() => {
            const clearTitleButton = container.querySelectorAll(".fa-x")[1];
            userEvent.click(clearTitleButton);
        })

        expect(titleField.value).toBe('');
    })  

    test('check if only title field is cleared', async () => {
        const mockFn = jest.fn();
        mockFn.mockReturnValue(false);

        const {container} = render(<FilmSection><Table/><Search clear={mockFn}/></FilmSection>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'phrase');

        const genreField = screen.getAllByRole('textbox')[2];
        userEvent.type(genreField, 'serial');
        
        await waitFor(() => {
            const clearTitleButton = container.querySelectorAll(".fa-x")[1];
            userEvent.click(clearTitleButton);
        })

        expect(titleField.value).toBe('');
        expect(genreField.value).toBe('serial');
    })  

// ---------------- sorting and filtering--------------------

test('check how sorting down films by title works', async () => {
    const {container} = render(<FilmSection/>);
    
    await waitFor(()=> {
        const sortUpButton = container.querySelectorAll(".fa-caret-down")[0];
        userEvent.click(sortUpButton)
    })
    
    const title = screen.getByText(/ZWYCIĘZCY NIE UMIERAJĄ/i)
    expect(title).toBeInTheDocument();
}) 

test('check how sorting up films by title works', async () => {
    const {container} = render(<FilmSection/>);
    
    const firstTitleRow = screen.getAllByRole('row')[2];
    const thirdTitleRow = screen.getAllByRole('row')[4];
    expect(thirdTitleRow.textContent.includes('ALFRED SCHREYER Z DROHOBYCZA')).toBe(true);

    await waitFor(()=> {
        const sortUpButton = container.querySelectorAll(".fa-caret-up")[0];
        userEvent.click(sortUpButton)
    })
    
    expect(thirdTitleRow.textContent.includes('ALFRED SCHREYER Z DROHOBYCZA')).toBe(false);
    expect(firstTitleRow.textContent.includes('ALFRED SCHREYER Z DROHOBYCZA')).toBe(true);
})  

// ---------------- pagination--------------------
    
    test('check if all pagination buttons exist', () => {
        render(<FilmSection/>);

        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(7);
    })  

    test('check if corect number of pagination buttons exist when title is searched', () => {
        render(<FilmSection/>);

        const titleField = screen.getAllByRole('textbox')[1];
        userEvent.type(titleField, 'alfred');

        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(1);
    })  

    test('check if correct numbers of films exist on page', async () => {
        render(<FilmSection/>);

        const rows = screen.getAllByRole('row');

        expect(rows.length).toBe(9);   // 6+3 thead, search, tfoot
    })

    test('check if pagination button correctly works', async () => {
        render(<FilmSection/>);

        await waitFor(()=> {
            const button = screen.getByRole('button', {name:'2'});
            userEvent.click(button)
        })
        
        const title = screen.getByText(/MOJA WIELKA RODZINA/i);
        expect(title).toBeInTheDocument();
    })  
})
