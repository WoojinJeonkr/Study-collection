import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DOMPurify from "dompurify";
import { AnswerRegisterDialog, displayDatePattern, Question } from "components";

function QuestionDetailForm(props: { question: Question }) {
  const { question } = props;
  const auth = sessionStorage.getItem("auth") as unknown as string;
  return (
    <Paper>
      <Table sx={{ mb: 4 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ float: "left", borderBottom: "none", fontSize: "Large" }}
            >
              Q. {question?.title}
            </TableCell>
            <TableCell sx={{ float: "right", borderBottom: "none" }}>
              {displayDatePattern(question?.modifiedDate)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ borderBottom: "none" }}>
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(question?.question),
                }}
              />
            </TableCell>
          </TableRow>
          {auth === "ROLE_ADMIN" ? (
            <AnswerRegisterDialog question={question} />
          ) : (
            <div />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default QuestionDetailForm;
