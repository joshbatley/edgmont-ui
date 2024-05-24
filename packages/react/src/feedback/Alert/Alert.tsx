import styled from 'styled-components';
import { variant } from 'styled-system';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Box, TextComp, Title } from '../../data';
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
  border-color: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  ${variant({
  prop: 'severity',
  variants: {
    error: {
      borderColor: 'destructive',
      'h1, svg, p': {
        color: 'destructive',
      },
    },
    none: {
      'h1, svg, p': {
        color: 'foreground',
      },
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
}) => {
  let Icons = icon || (severity === 'error' ? <ExclamationCircleIcon width={20} height={20} /> : <></>);
  return (
    <Container p={2} display="flex" flexGrow={1} alignItems="center" borderRadius="4" overflow="hidden"
      position="relative" width={29} fontSize={1} lineHeight={1} flexWrap="wrap" severity={severity} {...rest}>
      <Box minWidth="100%">
        <Icon mr={3} mt="1px" lineHeight={5} alignSelf="center">{Icons}</Icon>
        <Title display="inline" fontWeight="600" fontSize={1} lineHeight={2} letterSpacing="0.025em">{title}</Title>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </Box>
      <Content>{children}</Content>
    </Container>
  );
};

