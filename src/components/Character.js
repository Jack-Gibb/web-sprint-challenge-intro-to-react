import React from 'react';
import styled from 'styled-components';


const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: right;
`;

const CharacterName = styled.h2`
  margin-bottom: 16px;
`;

const Character = ({ name }) => {
  return (
    <CharacterContainer>
      <CharacterName>{name}</CharacterName>
    </CharacterContainer>
  );
};

export default Character;
