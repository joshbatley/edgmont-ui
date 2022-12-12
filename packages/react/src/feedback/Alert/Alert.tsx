import React from 'react';
import { Box, Text } from 'data';
import { getIcon } from './utils';
import { CloseBtn } from './CloseBtn';
import styled from 'styled-components';
import { variant } from 'styled-system';

export type AlertProps = {
  severity?: Severity;
  title?: string;
  icon?: React.ReactNode;
  withClose?: () => void;
} & WithChildren;

const Container = styled(Box) <{ severity: Severity }>`
  ${({ theme }) => variant({
  prop: 'severity',
  variants: {
    error: {
      bg: 'errorLight',
      color: 'error',
      border: theme.borders.error[1],
    },
    warning: {
      bg: 'warningLight',
      color: 'warning',
      border: theme.borders.warning[1],
    },
    info: {
      bg: 'infoLight',
      color: 'info',
      border: theme.borders.info[1],
    },
    success: {
      bg: 'successLight',
      color: 'success',
      border: theme.borders.success[1],
    },
    none: {
      bg: 'white',
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

const Content = styled(Text)`
  min-width: 100%;
  margin-top: ${({ theme }) => theme.space[2]};
  :empty {
    margin-top: 0;
  }
`;

export const Alert: React.FC<AlertProps> = ({
  severity = 'none', title, icon, children, withClose, ...rest
}) => (
  <Container p={2} display="flex" flexGrow={1} alignItems="center" boxShadow="base.1" borderRadius={2} overflow="hidden" position="relative" width={29} fontSize={1} lineHeight={1} flexWrap="wrap"
    severity={severity} {...rest}>
    <Box minWidth="100%">
      <Icon mr={3} mt="1px" lineHeight={5} alignSelf="center">{icon || getIcon(severity)}</Icon>
      <Text as="strong" fontSize={1} lineHeight={2} letterSpacing="0.025em">{title}</Text>
      {withClose && (<CloseBtn onClick={withClose} />)}
    </Box>
    <Content>{children}</Content>
  </Container>
);

