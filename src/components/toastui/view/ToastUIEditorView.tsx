import React from 'react';
import ToastUIViewer from '../ToastUIViewer';
import ToastUIEditor from '../ToastUIEditor';

interface Props {
  content: string;
  onChange: (value: string) => void;
  mode: boolean;
}
const ToastUIEditorView = ({content, onChange, mode} : Props) => {

  return (
    mode ? (
      <ToastUIViewer
        initialValue={content}
      />
    ) : (
      <ToastUIEditor
      initialValue={content}
      onChange={onChange}
    />
    )
  );
};

export default ToastUIEditorView;