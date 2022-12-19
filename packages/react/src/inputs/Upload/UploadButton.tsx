import React, { useCallback } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import styled from 'styled-components';
import { OutlineButton } from 'inputs';
import { List } from 'data';
import { BasicItem } from './BasicItem';
import { AcceptedFile, BaseUploader, BaseUploaderProps } from '.';

export type UploadButtonProps = {
  buttonText?: boolean;
} & Omit<BaseUploaderProps, 'container' | 'renderUploader' | 'baseClasses' | 'dragActiveClasses'>;

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

export const UploadButton: React.FC<UploadButtonProps> = ({
  buttonText = 'Upload file', ...rest
}) => {
  let Uploader = useCallback((_: boolean, open: () => void) => (
    <OutlineButton onClick={open}>
      <ArrowUpTrayIcon width={16} height={16} />
      <span>{buttonText}</span>
    </OutlineButton>
  ), [buttonText]);

  let defaultRender = useCallback((files: AcceptedFile[], handleDelete: any) => (
    <StyledList>
      {files.map(file => (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </StyledList>
  ), []);

  return (
    <BaseUploader
      container={({ ...params }: any) => <div {...params} />}
      {...rest}
      options={{
        noClick: true,
        noKeyboard: true,
      }}
      renderUploader={Uploader}
      filesRender={defaultRender}
    />
  );
};
