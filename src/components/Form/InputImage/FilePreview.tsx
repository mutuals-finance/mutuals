import * as React from 'react';
import { IoClose } from 'react-icons/io5';

import { ButtonOutline } from '@/components/Button';

import { FileWithPreview } from '../types';

interface FilePreviewProps {
  file: FileWithPreview;
  onDeleteFile?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => void;
  readOnly?: boolean;
}

export default function FilePreview({
  onDeleteFile,
  file,
  readOnly,
}: FilePreviewProps): React.ReactElement {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    onDeleteFile?.(e, file);
  };

  return (
    <div className='relative flex w-full flex-1'>
      <img
        src={file.preview}
        alt={file.name}
        className='flex w-full flex-1 object-cover'
      />
      {!readOnly && (
        <div className='absolute top-3 right-3'>
          <ButtonOutline
            size={'sm'}
            onClick={handleDelete}
            icon={<IoClose />}
          />
        </div>
      )}
    </div>
  );
}
