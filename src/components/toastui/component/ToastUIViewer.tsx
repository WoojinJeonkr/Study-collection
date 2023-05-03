import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';

const ToastUIViewer = (props: { content: string }) => {
  return (
    <Viewer
      initialValue={props.content}
    />
  );
};

export default ToastUIViewer;