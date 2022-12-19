import React, { useEffect, useState } from 'react';
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
  container: React.ElementType;
  options?: DropzoneOptions;
  renderUploader: (isDragActive: boolean, open: () => void) => React.ReactNode;
  filesRender?: (files: AcceptedFile[], handleDelete: (key: string) => void) => React.ReactNode;
  handleFileUpdate?: (files: AcceptedFile[]) => void;
};

export const BaseUploader: React.FC<BaseUploaderProps> = ({
  container: Container, options = {}, renderUploader, filesRender, handleFileUpdate,
}) => {
  let [files, setFiles] = useState<AcceptedFile[]>([]);
  let { onDrop, ...otherOptions } = options;

  let wrappedOnDrop = (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    onDrop?.(acceptedFiles, fileRejections, event);
    let accepted = acceptedFiles.map(f => (getMeta(f, [])));
    let rejected = fileRejections.map(f => (getMeta(f.file, f.errors)));
    setFiles([...accepted, ...rejected]);
  };

  let { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop: wrappedOnDrop, ...otherOptions });

  let handleDelete = (key: string) => {
    setFiles(files.filter(f => f.key !== key));
  };

  useEffect(() => {
    handleFileUpdate?.(files);
  }, [files, handleFileUpdate]);

  return (
    <>
      <Container isDragActive={isDragActive} {...getRootProps()}>
        <input {...getInputProps()} />
        {renderUploader?.(isDragActive, open)}
      </Container>
      {filesRender?.(files, handleDelete)}
    </>
  );
};
