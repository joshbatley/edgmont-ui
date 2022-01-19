import React from 'react';
import { Button, ButtonProps } from 'inputs';
import { UploadIcon } from 'base/Icons/Outline';
import { AcceptedFile, BaseUploader, BaseUploaderProps } from './BaseUploader';
import { List } from 'base';
import { BasicItem } from './BasicItem';

export type UploadButtonProps = {
  buttonText?: boolean;
  buttonProps?: ButtonProps;
} & Omit<BaseUploaderProps, 'renderUploader' | 'baseClasses' | 'dragActiveClasses'>;

export const UploadButton: React.FC<UploadButtonProps> = ({ buttonText = 'Upload file', buttonProps = { variant: 'Outline' }, ...rest }) => {
  let Uploader = (isDragActive: boolean, open: () => void) => (
    <>
      <Button {...buttonProps} onClick={open} >
        <UploadIcon width={16} height={16} className="mr-2" />
        {buttonText}
      </Button>
    </>
  );

  let defaultRender = (files: AcceptedFile[], handleDelete: any) => (
    <List className="space-y-2 mt-2 empty:m-0">
      {files.map(file => (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </List>
  );

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
