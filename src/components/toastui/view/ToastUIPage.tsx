import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import ToastUIEditorView from './ToastUIEditorView';

const ToastUIPage = () => {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>('');

  const handleSwitch = () => {
    setChecked(!checked);
    setMode(!mode);
  }

  const handleToastUIEditor = (value: string) => {
    setContent(value);
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <Typography variant='h3'>Toast UI Editor / Viewer</Typography>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>View Mode</TableCell>
            <TableCell>
              <Switch
                checked={checked}
                onChange={handleSwitch}
                inputProps={{ 'aria-label': 'controlled' }}
                name={ mode ? 'Viewer' : 'Editor' }
              />
            </TableCell>
          </TableRow>
          <TableCell>{mode ? 'Toast UI Viewer' : 'Toast UI Editor'}</TableCell>
          <TableCell>
            <ToastUIEditorView
              content={content}
              onChange={handleToastUIEditor}
              mode={mode}
            />
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ToastUIPage;