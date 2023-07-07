import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';
import styled from 'styled-components';

const CenterText = styled.h1`
text-align: right;
font-size: 50px;
`;

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <CenterText>The Characters</CenterText>
      {characters.map((character) => (
        <Character key={character.name} name={character.name} />
      ))}
    </div>
  );
};
const App = () => {
  return <CharacterList />;
};

export default App;
