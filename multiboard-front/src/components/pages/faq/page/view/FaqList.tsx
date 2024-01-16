import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import {
  Faq,
  FaqRegisterDialog,
  findFaqList,
  FaqDeleteDialog,
  FaqUpdateDialog,
  CustomizeAccordion,
  CustomizeAccordionSummary,
  CustomizeAccordionDetails,
} from "components";

function FaqList() {
  const [faqs, setFaqs] = useState<Array<Faq>>([]);

  useEffect(() => {
    findFaqList().then((items) => setFaqs(items.data));
  }, []);

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const auth: boolean = sessionStorage.getItem("auth") === "ROLE_ADMIN";

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Typography variant="h3" fontFamily="sans-serif" sx={{ mb: 6 }}>
        FAQ
        {auth ? <FaqRegisterDialog /> : <div />}
      </Typography>
      {faqs.map((faq: Faq, idx: number) => {
        const { id, question, answer } = faq;
        return (
          <CustomizeAccordion
            key={id}
            expanded={expanded === `panel_${id}`}
            onChange={handleChange(`panel_${id}`)}
            sx={{ ml: 2, mr: 2 }}
          >
            <CustomizeAccordionSummary>
              <Typography>
                Q{idx + 1}. {question}
              </Typography>
            </CustomizeAccordionSummary>
            <CustomizeAccordionDetails>
              <Typography>{answer}</Typography>
            </CustomizeAccordionDetails>
            {auth ? (
              <>
                <FaqDeleteDialog id={id} />
                <FaqUpdateDialog id={id} question={question} answer={answer} />
              </>
            ) : (
              <div />
            )}
          </CustomizeAccordion>
        );
      })}
    </div>
  );
}

export default FaqList;
