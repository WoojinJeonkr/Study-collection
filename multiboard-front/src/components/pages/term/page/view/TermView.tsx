/* eslint-disable react/no-danger */
import {
  Box,
  Paper,
  Tab,
  Table,
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState, SyntheticEvent } from "react";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import DOMPurify from "dompurify";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";
import { findTermList, Term, TermListDialog } from "components";

function TermView() {
  const [termList, setTermList] = useState<Array<Term>>([]);
  const [chapterNumber, setChapterNumber] = useState("1");
  const auth = sessionStorage.getItem("auth") as unknown as string;
  const navigate = useNavigate();
  const termHead = termList
    .sort((a: Term, b: Term) => a.chapterNum - b.chapterNum)
    .map((item) => item.title);
  const termContent = termList.map((item) => item.content);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setChapterNumber(newValue);
  };

  const onClickRegisterButton = () => {
    navigate("/term/create");
  };

  useEffect(() => {
    findTermList().then((res) => setTermList(res.data));
  }, []);

  return (
    <Paper>
      <Table sx={{ ml: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{ borderBottom: "none" }}>
              <Typography variant="h4">서비스 이용약관</Typography>
            </TableCell>
          </TableRow>
          {auth === "ROLE_ADMIN" ? (
            <TableRow>
              <TableCell sx={{ textAlign: "right", borderBottom: "none" }}>
                {termList.length < 7 ? (
                  <Button
                    variant="contained"
                    startIcon={<CreateIcon />}
                    onClick={onClickRegisterButton}
                  >
                    서비스 이용약관 작성
                  </Button>
                ) : (
                  <div />
                )}
              </TableCell>
              <TableCell
                sx={{
                  width: "22%",
                  textAlign: "right",
                  borderBottom: "none",
                }}
              >
                <TermListDialog />
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell sx={{ borderBottom: "none" }} />
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          <TableRow>
            {termList.length > 0 ? (
              <TableCell colSpan={3}>
                <TabContext value={chapterNumber}>
                  <Box
                    sx={{
                      borderBottom: 0.5,
                      borderColor: "divider",
                      width: "80vw",
                    }}
                  >
                    <TabList onChange={handleChange}>
                      <Tab
                        label={termHead[0]}
                        value="1"
                        disabled={termHead[0] === undefined}
                      />
                      <Tab
                        label={termHead[1]}
                        value="2"
                        disabled={termHead[1] === undefined}
                      />
                      <Tab
                        label={termHead[2]}
                        value="3"
                        disabled={termHead[2] === undefined}
                      />
                      <Tab
                        label={termHead[3]}
                        value="4"
                        disabled={termHead[3] === undefined}
                      />
                      <Tab
                        label={termHead[4]}
                        value="5"
                        disabled={termHead[4] === undefined}
                      />
                      <Tab
                        label={termHead[5]}
                        value="6"
                        disabled={termHead[5] === undefined}
                      />
                      <Tab
                        label={termHead[6]}
                        value="7"
                        disabled={termHead[6] === undefined}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[0]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[1]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[2]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[3]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[4]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[5]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="7">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(termContent[6]),
                      }}
                    />
                  </TabPanel>
                </TabContext>
              </TableCell>
            ) : (
              <TableCell />
            )}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TermView;
