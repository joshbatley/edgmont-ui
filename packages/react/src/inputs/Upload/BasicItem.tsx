import React from 'react';
import clsx from 'clsx';
import { PaperClipIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ClickableElement } from 'inputs';
import { Tooltip } from 'feedback';
import { TextInline } from 'data';
import { AcceptedFile } from '.';

export type BasicItemProps = {
  file: AcceptedFile;
  handleDelete: (key: string) => void;
};

export const BasicItem: React.FC<BasicItemProps> = ({ file, handleDelete }) => {
  let { bytes, name } = file.meta;
  let hasError = (file.errors?.length || 0) > 0;
  let errorMessage = hasError && file.errors!.reduce((acc, curr) => acc += curr.message + ' ', '');
  return (
    <Tooltip disabled={!hasError} as='li' tooltip={errorMessage} dark>
      <div
        className={clsx(
          'flex items-center justify-between px-1 rounded-sm group hover:bg-slate-50',
          hasError ? 'text-red-500' : 'text-slate-400',
        )}
      >
        <div className="flex items-center space-x-2">
          <PaperClipIcon widths={16} height={16} />
          <TextInline className={hasError ? 'text-current' : 'text-gray-900'}>{name}</TextInline>
          {!hasError && <TextInline className="text-sm">{bytes}</TextInline>}
        </div>
        <div className="flex items-center space-x-2">
          <ClickableElement
            className={clsx('opacity-0 group-hover:opacity-100', { 'opacity-100': hasError })}
            onClick={() => handleDelete(file.key)}
          >
            <TrashIcon width={16} height={16} />
          </ClickableElement>
        </div>
      </div>
    </Tooltip>
  );
};
