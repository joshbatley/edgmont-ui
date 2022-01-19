import React from 'react';
import { Tooltip, TextInline, Image, Text } from 'base';
import { PhotographIcon, TrashIcon } from 'base/Icons/Outline';
import { AcceptedFile } from '.';
import { ClickableElement } from 'inputs';
import classNames from 'classnames';

export type TileItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

const fallback = (
  <div className="w-12 h-12 flex items-center justify-center rounded text-gray-500 bg-gray-100">
    <PhotographIcon width={30} height={30} />
  </div>
);

export const TileItem: React.FC<TileItemProps> = ({ file, handleDelete }) => {
  let { name, bytes, type, extension } = file.meta;
  let imgSrc = URL.createObjectURL(file.file);
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  let meta = [bytes, type, extension].filter(Boolean).join(' - ');

  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage} dark>
      <div className={classNames('flex items-center space-x-2 border rounded-md overflow-hidden p-2 group', hasError && 'border-red-500 text-red-500')}>
        <Image src={imgSrc as string} className="w-12 h-12 object-cover bg-gray-200 rounded" fallback={fallback} />
        <div className="flex flex-col">
          <TextInline className="font-bold">{name}</TextInline>
          <Text className="text-xs text-slate-400">{meta}</Text>
        </div>
        <div className="flex flex-grow items-center justify-end">
          <ClickableElement className={classNames('opacity-0 group-hover:opacity-100 text-gray-500', hasError && 'opacity-100 text-current')} onClick={() => handleDelete(file.key)}>
            <TrashIcon width={20} height={20} />
          </ClickableElement>
        </div>
      </div>
    </Tooltip>
  );
};
