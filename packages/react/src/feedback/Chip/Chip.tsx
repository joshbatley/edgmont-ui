import styled from 'styled-components';
import { variant } from 'styled-system';
import { tint, darken } from 'polished';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { ClickableElement } from '../../inputs';
import { TextComp } from '../../data';
import { Colors, Size, WithChildren } from '../../types';

export type ChipProps = {
  color?: Colors;
  size?: Size;
  handleDelete?: () => void;
} & WithChildren;

export const Container = styled.div<{ color: Colors, size: Size }>`
  border-radius: ${({ theme }) => theme.radii[4]};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: 0.5rem;
  }
  ${({ theme }) => variant({
  prop: 'color',
  variants: {
    primary: {
      color: 'primaryAccent',
      bg: darken(0.1, tint(0.2, theme.colors.primaryHighlight)),
    },
    success: {
      color: 'successAccent',
      bg: darken(0.1, tint(0.2, theme.colors.successHighlight)),
    },
    info: {
      color: 'infoAccent',
      bg: darken(0.1, tint(0.2, theme.colors.infoHighlight)),
    },
    error: {
      color: 'errorAccent',
      bg: darken(0.1, tint(0.2, theme.colors.errorHighlight)),
    },
    warning: {
      color: 'warningAccent',
      bg: darken(0.1, tint(0.2, theme.colors.warningHighlight)),
    },
    base: {
      color: 'base',
      bg: 'background.3',
    },
  },
})}
  ${variant({
  prop: 'size',
  variants: {
    small: {
      px: 2,
      py: '1px',
      fontSize: 0,
      lineHeight: 0,
      fontWeight: 'bold',
    },
    medium: {
      px: 3,
      py: 1,
      fontSize: 1,
      lineHeight: 1,
      fontWeight: 'bold',
    },
    large: {
      px: 3,
      py: 2,
      fontSize: 2,
      lineHeight: 2,
      fontWeight: 'bold',
    },
  },
})}
`;


export const Chip: React.FC<ChipProps> = ({
                                            color = 'primary', size = 'small', handleDelete, children,
                                          }) => (
  <Container size={size} color={color}>
    <TextComp>{children}</TextComp>
    {(handleDelete !== undefined && handleDelete !== null) && (
      <ClickableElement onClick={handleDelete}>
        <XCircleIcon width={16} height={16}/>
      </ClickableElement>
    )}
  </Container>
);

