import React from 'react';
import { PaperClipIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ClickableElement } from 'inputs';
import { Tooltip } from 'feedback';
import { Box, Text } from 'data';
import { AcceptedFile } from '.';
import styled from 'styled-components';

export type BasicItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

const BoxStyled = styled(Box)`
  :hover button {
    opacity: 1;
  }
`;

const DeleteBtn = styled(ClickableElement) <{ hasError: boolean }>`
  opacity: ${({ hasError }) => hasError ? 1 : 0};
`;

const SpacedBox = styled(Box)`
  > :not([hidden]) ~ :not([hidden]) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`;

export const BasicItem: React.FC<BasicItemProps> = ({ file, handleDelete }) => {
  let { bytes, name } = file.meta;
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage} dark>
      <BoxStyled
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px="1"
        borderRadius="1"
        color={hasError ? 'error' : 'base'}
      >
        <SpacedBox display="flex" alignItems="center">
          <PaperClipIcon widths={16} height={16} />
          <Text as="span">{name}</Text>
          {!hasError && <Text as="span" fontSize={1} lineHeight={1}>{bytes}</Text>}
        </SpacedBox>
        <SpacedBox display="flex" alignItems="center">
          <DeleteBtn hasError={hasError} onClick={() => handleDelete(file.key)}>
            <TrashIcon width={16} height={16} />
          </DeleteBtn>
        </SpacedBox>
      </BoxStyled>
    </Tooltip>
  );
};
