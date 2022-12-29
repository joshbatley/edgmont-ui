import React from 'react';
import { PrimaryButton, Box } from '@edgmont-ui/react';
import styled from 'styled-components';

const SpecialBox = styled(Box)`
  background: ${({ theme }) => theme.colors.error};}
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/react">
          <SpecialBox>123</SpecialBox>
          <PrimaryButton>React</PrimaryButton>
        </a>
      </header>
    </div>
  );
}

export default App;
