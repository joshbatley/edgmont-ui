import React from 'react';
import { PhotoIcon, TrashIcon } from '@heroicons/react/24/outline';
import { TextInline, Text, Image, Box } from 'data';
import { ClickableElement } from 'inputs';
import { Tooltip } from 'feedback';
import { AcceptedFile } from '.';
import styled from 'styled-components';

export type TileItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

const fallback = (
  <Box width="12" height="12" display="flex" alignItems="center" justifyContent="center" color="baseLight" borderRadius="2" bg="lightGray">
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
  background: ${({ theme }) => theme.colors.offwhite};
`;

export const TileItem: React.FC<TileItemProps> = ({ file, handleDelete }) => {
  let { name, bytes, type, extension } = file.meta;
  let imgSrc = URL.createObjectURL(file.file);
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  let meta = [bytes, type, extension].filter(Boolean).join(' - ');

  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage} dark>
      <BoxStyled display="flex" alignItems="center" p="2" overflow="hidden" borderRadius="3" border={hasError ? 'error.1' : 'lightGray.1'} color={hasError ? 'error' : 'base'}>
        <StyledImage src={imgSrc as string} fallback={fallback} />
        <Box display="flex" flexDirection="column" ml="2">
          <TextInline fontWeight="700">{name}</TextInline>
          <Text fontSize="0" lineHeight="0" color="baseLight">{meta}</Text>
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
