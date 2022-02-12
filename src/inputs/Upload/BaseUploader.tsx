import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DropEvent, DropzoneOptions, FileError, FileRejection, useDropzone } from 'react-dropzone';
import { getMeta } from './Utils';

export type AcceptedFile = {
  key: string;
  file: File;
  errors?: FileError[];
  meta: {
    name: string;
    type: string;
    extension: string;
    bytes: string;
  }
};

export type BaseUploaderProps = {
  baseClasses?: string;
  dragActiveClasses?: string;
  options?: DropzoneOptions;
  renderUploader: (isDragActive: boolean, open: () => void) => React.ReactNode;
  filesRender?: (files: AcceptedFile[], handleDelete: (key: string) => void) => React.ReactNode;
  handleFileUpdate?: (files: AcceptedFile[]) => void;
};

export const BaseUploader: React.FC<BaseUploaderProps> = ({
  baseClasses, dragActiveClasses, options = {}, renderUploader, filesRender, handleFileUpdate,
}) => {
  let [files, setFiles] = useState<AcceptedFile[]>([]);
  let { onDrop, ...otherOptions } = options;

  function wrappedOnDrop(acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) {
    onDrop?.(acceptedFiles, fileRejections, event);
    let accepted = acceptedFiles.map(f => (getMeta(f, [])));
    let rejected = fileRejections.map(f => (getMeta(f.file, f.errors)));
    setFiles([...accepted, ...rejected]);
  }

  let { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop: wrappedOnDrop, ...otherOptions });

  function handleDelete(key: string) {
    setFiles(files.filter(f => f.key !== key));
  }

  useEffect(() => {
    handleFileUpdate?.(files);
  }, [files, handleFileUpdate]);


  return (
    <>
      <div className={classNames(baseClasses, isDragActive && dragActiveClasses)} {...getRootProps()}>
        <input {...getInputProps()} />
        {renderUploader?.(isDragActive, open)}
      </div>
      {filesRender?.(files, handleDelete)}
    </>
  );
};
