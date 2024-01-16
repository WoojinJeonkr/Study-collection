import React from 'react';
import { Editor } from '@toast-ui/react-editor';

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
};

const ToastUIEditor = ({initialValue, onChange} : Props) => {

  const handleEditorChange = (e: any) => {
    onChange(e.target.getContent());
  }

  return (
    <Editor
      initialValue={initialValue}
      onChange={handleEditorChange}
      previewStyle='vertical'
      height='600px'
    />
  );
};

export default ToastUIEditor;