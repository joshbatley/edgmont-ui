import { FileError } from 'react-dropzone';
import { AcceptedFile } from '.';

function formatBytes(bytes: number, decimals = 2) {
  if (bytes == 0) return '0 Bytes';
  let k = 1024,
    dm = decimals || 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function getMeta(file: File, errors: FileError[]): AcceptedFile {
  let rawType = file.type.split('/');
  let rawName = file.name.split('.');

  return {
    key: file.name,
    file,
    errors: errors,
    meta: {
      name: file.name,
      type: rawType[0] || 'text',
      extension: rawType[1] || rawName[1] || '',
      bytes: formatBytes(file.size),
    },
  };
}
