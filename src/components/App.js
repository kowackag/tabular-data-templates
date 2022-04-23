import React from 'react';

import FilmSection from './FilmSection/FilmSection';

import StyledApp from './App.styled';

function App() {
  return (
    <StyledApp>
      <header>Wojciech Walkiewicz - Filmografia</header>
      <FilmSection/>
    </StyledApp>
  );
}

export default App;