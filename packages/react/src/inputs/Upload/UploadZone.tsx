import { useCallback } from 'react';
import styled from 'styled-components';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { TextComp, List } from '../../data';
import { TileItem } from './TileItem';
import { BasicItem } from './BasicItem';
import { BaseUploader, BaseUploaderProps } from './BaseUploader';
import { AcceptedFile } from './Utils';

export type UploadZoneProps = {
  showAsTile?: boolean;
  bottomText?: string;
} & Omit<BaseUploaderProps, 'container' | 'renderUploader'>;

const Container = styled.div<{ isDragActive: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii[2]};
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 4px;
  border-style: dashed;
  padding: ${({ theme }) => `${theme.space[5]} ${theme.space[2]}`};

  > :not([hidden]) ~ :not([hidden]) {
    margin: ${({ theme }) => theme.space[1]} 0;
  }

  ${({ isDragActive, theme }) => isDragActive && `
    background: ${theme.colors.muted};
    border-color: ${theme.colors.accent};
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
  color: ${({ theme }) => theme.colors.foreground};
  ${({ isDragActive, theme }) => isDragActive && `
    color: ${theme.colors.foreground};
    ${theme.animations.bounce}
  `}
`;

export const UploadZone: React.FC<UploadZoneProps> = ({
  showAsTile,
  filesRender,
  bottomText = 'Support for a single or bulk upload.',
  ...rest
}) => {
  let Uploader = useCallback((isDragActive: boolean) => (
    <>
      <TrayIcon width={30} height={30} isDragActive={isDragActive} />
      {isDragActive ? <TextComp fontWeight="700" color="base">And drop your file to upload</TextComp> :
        <TextComp>
          Drag and drop, or <TextComp as="span" color="primary">click to find</TextComp> a file
        </TextComp>
      }
      <TextComp fontSize="1" lineHeight="1"
        color={isDragActive ? 'baseAccent' : 'baseHighlight'}>{bottomText}</TextComp>
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
