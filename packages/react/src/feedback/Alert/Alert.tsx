import styled from 'styled-components';
import { variant } from 'styled-system';
import { lighten } from 'polished';
import { Box, TextComp, Title } from '../../data';
import { getIcon } from './utils';
import { CloseBtn } from './CloseBtn';
import { Severity, WithChildren } from '../../types';

export type AlertProps = {
  severity?: Severity;
  title?: string;
  icon?: React.ReactNode;
  withClose?: () => void;
} & WithChildren;

const Container = styled(Box) <{ severity: Severity }>`
  border: 1px solid;
  ${({ theme }) => variant({
  prop: 'severity',
  variants: {
    error: {
      bg: 'destructive',
      border: 0,
      'h1, svg, p': {
        color: 'destructiveForeground',
      },
    },
    none: {
      bg: 'background',
      border: 0,
      'h1, svg, p': {
        color: 'foreground',
      },
      boxShadow: 'highlight',
    },
  },
})}
`;

const Icon = styled(Box)`
  float: left;
  :empty {
    margin: 0;
  }
`;

const Content = styled(TextComp)`
  min-width: 100%;
  margin-top: ${({ theme }) => theme.space[2]};
  :empty {
    margin-top: 0;
  }
`;

export const Alert: React.FC<AlertProps> = ({
  severity = 'none', title, icon, children, withClose, ...rest
}) => (
  <Container p={2} display="flex" flexGrow={1} alignItems="center" boxShadow="base.0" borderRadius="4" overflow="hidden"
    position="relative" width={29} fontSize={1} lineHeight={1} flexWrap="wrap" severity={severity} {...rest}>
    <Box minWidth="100%">
      <Icon mr={3} mt="1px" lineHeight={5} alignSelf="center">{icon || getIcon(severity)}</Icon>
      <Title display="inline" fontWeight="600" fontSize={1} lineHeight={2} letterSpacing="0.025em">{title}</Title>
      {withClose && (<CloseBtn onClick={withClose} />)}
    </Box>
    <Content>{children}</Content>
  </Container>
);

