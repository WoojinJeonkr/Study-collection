import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import { Faq, findTopFiveFaq } from "components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MainFaqPage() {
  const [mainFaqList, setMainFaqList] = useState<Array<Faq>>([]);
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("auth");

  const onMoveFaqDetail = () => {
    if (auth === "ROLE_USER" || auth === "ROLE_ADMIN") {
      navigate("/faq");
    } else {
      alert("회원만 조회가 가능합니다.");
      if (sessionStorage.getItem("jwt") !== null) {
        window.location.replace("/");
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    findTopFiveFaq().then((res) => setMainFaqList(res.data));
  }, []);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ mt: 0.5, ml: 2, mb: 2, fontFamily: "sans-serif" }}
      >
        FAQ
      </Typography>
      <Table sx={{ ml: 2, width: "95%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ textAlign: "center" }}>질문</TableCell>
            <TableCell sx={{ textAlign: "center" }}>답변</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mainFaqList.map((faq: Faq) => {
            return (
              <TableRow
                key={faq.id}
                sx={{ backgroundColor: "#F8FCFD", height: "5vh" }}
                onClick={onMoveFaqDetail}
              >
                <TableCell sx={{ textAlign: "center" }}>
                  {faq.question}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>{faq.answer}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default MainFaqPage;
