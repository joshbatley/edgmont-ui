import React from 'react';
import classNames from 'classnames';
import { UploadIcon } from 'feedback/Icons/Outline';
import { Text, TextInline, List } from 'data';
import { TileItem } from './TileItem';
import { BasicItem } from './BasicItem';
import { BaseUploader, AcceptedFile, BaseUploaderProps } from '.';

export type UploadZoneProps = {
  showAsTile?: boolean;
  bottomText?: string;
} & Omit<BaseUploaderProps, 'renderUploader' | 'baseClasses' | 'dragActiveClasses'>;

export const UploadZone: React.FC<UploadZoneProps> = ({
  showAsTile, filesRender, bottomText = 'Support for a single or bulk upload.', ...rest
}) => {
  let baseClasses = 'w-full flex flex-col text-center justify-center items-center rounded border-4 border-dashed px-2 py-5 space-y-2 cursor-pointer';
  let dragClasses = 'bg-indigo-500 border-indigo-300';

  let Uploader = (isDragActive: boolean) => (
    <>
      <UploadIcon width={30} height={30} className={classNames('text-gray-500', isDragActive && 'animate-bounce text-white')} />
      {isDragActive ? <Text className="font-bold text-white">And drop your file to upload</Text> :
        <Text>
          Drag and drop, or <TextInline className="text-indigo-600">click to find</TextInline> a file
        </Text>
      }
      <Text className={classNames('text-sm', isDragActive ? 'text-white' : 'text-gray-600')}>{bottomText}</Text>
    </>
  );

  let defaultRender = (files: AcceptedFile[], handleDelete: any) => (
    <List className="space-y-2 mt-3 empty:m-0">
      {files.map(file => showAsTile ? (
        <TileItem key={file.key} file={file} handleDelete={handleDelete} />
      ) : (
        <BasicItem key={file.key} file={file} handleDelete={handleDelete} />
      ))}
    </List>
  );

  return (
    <BaseUploader
      {...rest}
      baseClasses={baseClasses}
      dragActiveClasses={dragClasses}
      renderUploader={Uploader}
      filesRender={filesRender || defaultRender}
    />
  );
};
