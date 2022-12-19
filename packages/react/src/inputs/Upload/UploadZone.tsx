import React, { useCallback } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { Text, TextInline, List } from 'data';
import { TileItem } from './TileItem';
import { BasicItem } from './BasicItem';
import { BaseUploader, AcceptedFile, BaseUploaderProps } from '.';
import styled from 'styled-components';

export type UploadZoneProps = {
  showAsTile?: boolean;
  bottomText?: string;
} & Omit<BaseUploaderProps, 'container' | 'renderUploader' | 'baseClasses' | 'dragActiveClasses'>;

const Container = styled.div<{ isDragActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii[2]};
  border: ${({ theme }) => theme.borders.lightGray[3]};
  border-style: dashed;
  padding: ${({ theme }) => `${theme.space[5]} ${theme.space[2]}`};
  > :not([hidden]) ~ :not([hidden]) {
    margin: ${({ theme }) => theme.space[1]} 0;
  }
  ${({ isDragActive, theme }) => isDragActive && `
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primaryLight};
  `}
`;

const StyledList = styled(List)`
  margin-top: ${({ theme }) => theme.space[2]};
  > :not([hidden]) ~ :not([hidden]) {
    margin-top: ${({ theme }) => theme.space[2]};
    margin-bottom: ${({ theme }) => theme.space[2]};
  }
  :empty {
    margin: 0px;
  }
`;

const TrayIcon = styled(ArrowUpTrayIcon) <{ isDragActive: boolean }>`
  color: ${({ theme }) => theme.colors.baseLight};
  ${({ isDragActive, theme }) => isDragActive && `
    color: #fff;
    ${theme.animations.bounce}
  `}
`;

export const UploadZone: React.FC<UploadZoneProps> = ({
  showAsTile, filesRender, bottomText = 'Support for a single or bulk upload.', ...rest
}) => {
  let Uploader = useCallback((isDragActive: boolean) => (
    <>
      <TrayIcon width={30} height={30} isDragActive={isDragActive} />
      {isDragActive ? <Text fontWeight="700" color="white">And drop your file to upload</Text> :
        <Text>
          Drag and drop, or <TextInline color="primary">click to find</TextInline> a file
        </Text>
      }
      <Text fontSize="1" lineHeight="1" color={isDragActive ? '#fff' : 'baseLight'}>{bottomText}</Text>
    </>
  ), [bottomText]);

  let defaultRender = useCallback((files: AcceptedFile[], handleDelete: any) => (
    <StyledList>
      {files.map(file => showAsTile ? (
        <TileItem key={file.key} file={file} handleDelete={handleDelete} />
      ) : (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </StyledList>
  ), [showAsTile]);

  return (
    <BaseUploader
      {...rest}
      container={Container}
      renderUploader={Uploader}
      filesRender={filesRender || defaultRender}
    />
  );
};
