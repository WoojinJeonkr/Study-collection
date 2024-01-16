import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import { findTermList, Term, TermTable } from "components";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TermListDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [termList, setTermList] = useState<Array<Term>>([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    findTermList().then((res) => setTermList(res.data));
  }, []);

  return (
    <>
      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        onClick={handleOpen}
        sx={{ mr: 2 }}
      >
        서비스 이용약관 전체 조회
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullScreen
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ flex: 1 }} variant="h5" component="div">
              서비스 이용약관 전체 조회
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <TermTable data={termList} url="/term" />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TermListDialog;
