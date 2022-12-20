import styled from 'styled-components';

export const OrderedList = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
  *::marker {
    color:${({ theme }) => theme.colors.baseHighlight};
  }
`;
