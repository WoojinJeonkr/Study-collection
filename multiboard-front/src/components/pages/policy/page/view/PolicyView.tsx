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
import { findPolicyList, Policy, PolicyListDialog } from "components";

function PolicyView() {
  const [policyList, setPolicyList] = useState<Array<Policy>>([]);
  const [chapterNumber, setChapterNumber] = useState("1");
  const auth = sessionStorage.getItem("auth") as unknown as string;
  const navigate = useNavigate();
  const policyHead = policyList
    .sort((a: Policy, b: Policy) => a.chapterNum - b.chapterNum)
    .map((item) => item.title);
  const policyContent = policyList.map((item) => item.content);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setChapterNumber(newValue);
  };

  const onClickRegisterButton = () => {
    navigate("/policy/create");
  };

  useEffect(() => {
    findPolicyList().then((res) => setPolicyList(res.data));
  }, []);

  return (
    <Paper>
      <Table sx={{ ml: 2 }}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} sx={{ borderBottom: "none" }}>
              <Typography variant="h4">개인정보 처리방침</Typography>
            </TableCell>
          </TableRow>
          {auth === "ROLE_ADMIN" ? (
            <TableRow>
              <TableCell sx={{ textAlign: "right", borderBottom: "none" }}>
                {policyList.length < 5 ? (
                  <Button
                    variant="contained"
                    startIcon={<CreateIcon />}
                    onClick={onClickRegisterButton}
                  >
                    개인정보 처리방침 작성
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
                <PolicyListDialog policyList={policyList} />
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
            {policyList.length > 0 ? (
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
                        label={policyHead[0]}
                        value="1"
                        disabled={policyHead[0] === undefined}
                      />
                      <Tab
                        label={policyHead[1]}
                        value="2"
                        disabled={policyHead[1] === undefined}
                      />
                      <Tab
                        label={policyHead[2]}
                        value="3"
                        disabled={policyHead[2] === undefined}
                      />
                      <Tab
                        label={policyHead[3]}
                        value="4"
                        disabled={policyHead[3] === undefined}
                      />
                      <Tab
                        label={policyHead[4]}
                        value="5"
                        disabled={policyHead[4] === undefined}
                      />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(policyContent[0]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="2">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(policyContent[1]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(policyContent[2]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(policyContent[3]),
                      }}
                    />
                  </TabPanel>
                  <TabPanel value="5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(policyContent[4]),
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

export default PolicyView;
