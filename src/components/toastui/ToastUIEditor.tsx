import { Editor } from '@toast-ui/react-editor';

interface Props {
  initialValue: string;
  onChange: (value: string) => void;
}
const ToastUIEditor = ({initialValue, onChange} : Props) => {

  return (
    <Editor
      initialValue={initialValue}
      onChange={onChange}
    />
  );
};

export default ToastUIEditor;