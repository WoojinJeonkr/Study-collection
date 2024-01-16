import { styled } from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const CustomizeAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default CustomizeAccordionDetails;
