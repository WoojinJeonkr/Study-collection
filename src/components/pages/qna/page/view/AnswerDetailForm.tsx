import { Paper, Table, TableHead, TableRow, TableCell } from "@mui/material";
import React from "react";
import DOMPurify from "dompurify";
import { Answer, displayDatePattern } from "components";

function AnswerDetailForm(props: { answer: Answer }) {
  const { answer } = props;
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow sx={{ float: "right" }}>
            <TableCell sx={{ borderBottom: "none" }}>
              {displayDatePattern(answer?.modifiedDate)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(answer?.answer),
                }}
              />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
  );
}

export default AnswerDetailForm;
