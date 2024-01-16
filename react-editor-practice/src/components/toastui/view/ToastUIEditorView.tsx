import React, { Suspense } from 'react';
import { ToastUIEditor } from '../component';

interface Props {
  content: string;
  onChange: (value: string) => void;
  mode: boolean;
}

const ToastUIEditorView = ({content, onChange, mode} : Props) => {

  const NoSsrViewer = React.lazy(() => import('../component/ToastUIViewer'));

  return (
    mode ? (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <NoSsrViewer
            content={content}
          />
        </Suspense><div>Loading...</div>
      </>
    ) : (
      <ToastUIEditor
      initialValue={content}
      onChange={onChange}
    />
    )
  );
};

export default ToastUIEditorView;