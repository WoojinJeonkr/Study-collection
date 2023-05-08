import React from 'react';
import 'react-quill/dist/quill.snow.css';
import CustomToolbar from './CustomToolbar';
import ReactQuill from 'react-quill';

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  mode: boolean;
}

const ReactQuillEditor = (props: Props) => {
  const modules = {
    toolbar: {
      container: '#toolbar',
    }
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ]

  return (
    props.mode ? (
      <div className='react-quill-editor'>
        <CustomToolbar />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={props.content}
          style={{ height: '400px'}}
          readOnly
        />
      </div>
    ) : (
      <div className='react-quill-editor'>
        <CustomToolbar />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={props.content}
          onChange={props.setContent}
          style={{ height: '400px'}}
        />
      </div>
    )
  )
};

export default ReactQuillEditor;