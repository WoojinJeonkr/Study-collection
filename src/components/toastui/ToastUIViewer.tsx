import { Viewer } from '@toast-ui/react-editor'
import React from 'react';

interface Props {
  initialValue: string;
}

const ToastUIViewer = ({ initialValue }: Props) => {

  return (
    <Viewer
      initialValue={initialValue}
    />
  );
};

export default ToastUIViewer;