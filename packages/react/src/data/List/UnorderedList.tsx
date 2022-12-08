import styled from 'styled-components';

export const UnorderedList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  *::marker {
    color:${({ theme }) => theme.colors.baseLight};
  }
`;
