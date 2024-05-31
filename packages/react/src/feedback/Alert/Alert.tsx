import styled from 'styled-components';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Box, Typography, Title } from '../../data';
import { CloseBtn } from './CloseBtn';
import { WithChildren } from '../../types';

export type AlertProps = {
  destructive?: boolean;
  title?: string;
  icon?: React.ReactNode;
  withClose?: () => void;
} & WithChildren;

const Container = styled(Box) <{ destructive: boolean }>`
  border: 1px solid;
  border-color: ${({ theme, destructive }) => destructive ? theme.colors.destructive : theme.colors.border};
  background: ${({ theme, destructive }) => destructive ? theme.colors.destructive : theme.colors.background};
  h1, svg, p {
    color: ${({ theme, destructive }) => destructive ? theme.colors.background : theme.colors.foreground};
  }
`;

const Icon = styled(Box)`
  float: left;
  :empty {
    margin: 0;
  }
`;

const Content = styled(Typography)`
  min-width: 100%;
  margin-top: ${({ theme }) => theme.space[2]};
  :empty {
    margin-top: 0;
  }
`;

export const Alert: React.FC<AlertProps> = ({
  destructive = false, title, icon, children, withClose, ...rest
}) => {
  let Icons = icon || (destructive ? <ExclamationCircleIcon width={20} height={20} /> : <></>);
  return (
    <Container p={2} display="flex" flexGrow={1} alignItems="center" borderRadius="4" overflow="hidden" position="relative" width={29} fontSize={1} lineHeight={1} flexWrap="wrap" destructive={destructive} {...rest} boxShadow="highlight">
      <Box minWidth="100%">
        <Icon mr={3} mt="1px" lineHeight={5} alignSelf="center">{Icons}</Icon>
        <Title display="inline" fontWeight="600" fontSize={1} lineHeight={2} letterSpacing="0.025em">{title}</Title>
        {withClose && (<CloseBtn onClick={withClose} />)}
      </Box>
      <Content>{children}</Content>
    </Container>
  );
};

