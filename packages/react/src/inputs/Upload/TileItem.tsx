import React from 'react';
import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Text, Image, Box } from 'data';
import { ClickableElement } from 'inputs';
import { Tooltip } from 'feedback';
import { AcceptedFile } from '.';
import styled from 'styled-components';

export type TileItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

const fallback = (
  <Box width="12" height="12" display="flex" alignItems="center" justifyContent="center" color="baseHighlight" borderRadius="2" bg="background.2">
    <PhotoIcon width={30} height={30} />
  </Box>
);

const DeleteBtn = styled(ClickableElement) <{ hasError: boolean }>`
  opacity: ${({ hasError }) => hasError ? 1 : 0};
`;

const BoxStyled = styled(Box)`
  :hover button {
    opacity: 1;
  }
`;
const StyledImage = styled(Image)`
  width: ${({ theme }) => theme.sizes[12]};
  height: ${({ theme }) => theme.sizes[12]};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii[2]};
  background: ${({ theme }) => theme.colors.background[1]};
`;

export const TileItem: React.FC<TileItemProps> = ({ file, handleDelete }) => {
  let { name, bytes, type, extension } = file.meta;
  let imgSrc = URL.createObjectURL(file.file);
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  let meta = [bytes, type, extension].filter(Boolean).join(' - ');

  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage} dark>
      <BoxStyled display="flex" alignItems="center" p="2" overflow="hidden" borderRadius="3" border={hasError ? 'error.1' : 'background2.1'} color={hasError ? 'error' : 'base'}>
        <StyledImage src={imgSrc as string} fallback={fallback} />
        <Box display="flex" flexDirection="column" ml="2">
          <Text as="span" fontWeight="700">{name}</Text>
          <Text fontSize="0" lineHeight="0" color="baseHighlight">{meta}</Text>
        </Box>
        <Box display="flex" flexGrow="1" alignItems="center" justifyContent="end">
          <DeleteBtn hasError={hasError} onClick={() => handleDelete(file.key)}>
            <TrashIcon width={16} height={16} />
          </DeleteBtn>
        </Box>
      </BoxStyled>
    </Tooltip>
  );
};
