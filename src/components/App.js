import React from 'react';

import FilmSection from './FilmSection';

import StyledApp from './App.styled';

const App = () => {
    return (
      <StyledApp>
        <header>Wojciech Walkiewicz - Filmografia</header>
        <FilmSection/>
      </StyledApp>
  );
}

export default App;