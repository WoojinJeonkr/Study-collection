import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import DOMPurify from "dompurify";
import { Policy, PolicyDeleteDialog, PolicyUpdateDialog } from "components";

function PolicyDetailForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { row: Policy };
  const { row } = state;

  const onMovePrevPage = () => {
    navigate("/policy");
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ ml: 2, mt: 2 }}
        fontFamily="sans-serif"
        gutterBottom
      >
        개인정보 처리방침 상세보기
      </Typography>
      <Card sx={{ m: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  minWidth: "10vh",
                  textAlign: "center",
                  borderBottom: "none",
                }}
              >
                제목
              </TableCell>
              <TableCell sx={{ minWidth: "90vh", borderBottom: "none" }}>
                <Typography variant="h6">{row?.title}</Typography>
              </TableCell>
              <TableCell sx={{ borderBottom: "none" }}>
                <PolicyDeleteDialog />
                <PolicyUpdateDialog policy={row} />
                <IconButton
                  edge="start"
                  color="primary"
                  aria-label="back"
                  onClick={onMovePrevPage}
                  sx={{ float: "right", mr: 1 }}
                >
                  <FirstPageIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>내용</TableCell>
              <TableCell colSpan={2}>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(row?.content),
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
}

export default PolicyDetailForm;
