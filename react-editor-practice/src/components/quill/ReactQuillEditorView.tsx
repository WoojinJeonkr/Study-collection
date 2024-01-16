import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography, TableCell, Switch } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ReactQuillEditor from './ReactQuillEditor';

const ReactQuillEditorView = () => {
  
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>('');

  const moveToHome = () => {
    navigate('/');
  }

  const handleSwitch = () => {
    setChecked(!checked);
    setMode(!mode);
  }

  return (
    <div>
    <Button style={{ float: 'right' }} onClick={moveToHome}>
      <HomeIcon />
    </Button>
    <TableContainer component={Paper}>
      <Typography variant='h3'>React Quill Editor / Viewer</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ width: '140px' }}>View Mode</TableCell>
            <TableCell>
              <Switch
                checked={checked}
                onChange={handleSwitch}
                inputProps={{ 'aria-label': 'controlled' }}
                name={ mode ? 'Viewer' : 'Editor' }
              />
            </TableCell>
          </TableRow>
          <TableCell>{mode ? 'React Quill Viewer' : 'React Quill Editor'}</TableCell>
          <TableCell>
            <ReactQuillEditor
              content={content}
              setContent={setContent}
              mode={mode}
            />
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  );
};

export default ReactQuillEditorView;