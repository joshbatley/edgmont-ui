import React, { useCallback } from 'react';
import { UploadIcon } from 'icons/Outline';
import { Button, ButtonProps } from 'inputs';
import { List } from 'data';
import { BasicItem } from './BasicItem';
import { AcceptedFile, BaseUploader, BaseUploaderProps } from '.';

export type UploadButtonProps = {
  buttonText?: boolean;
  buttonProps?: ButtonProps;
} & Omit<BaseUploaderProps, 'renderUploader' | 'baseClasses' | 'dragActiveClasses'>;

export const UploadButton: React.FC<UploadButtonProps> = ({ buttonText = 'Upload file', buttonProps = { variant: 'Outline' }, ...rest }) => {

  let Uploader = useCallback((isDragActive: boolean, open: () => void) => (
    <>
      <Button {...buttonProps} onClick={open} >
        <UploadIcon width={16} height={16} className="mr-2" />
        {buttonText}
      </Button>
    </>
  ), [buttonProps, buttonText]);

  let defaultRender = useCallback((files: AcceptedFile[], handleDelete: any) => (
    <List className="space-y-2 mt-2 empty:m-0">
      {files.map(file => (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </List>
  ), []);

  return (
    <BaseUploader
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
