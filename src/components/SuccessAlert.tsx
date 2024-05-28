import { Paper, Typography } from "@mui/material";
import { TEXTS } from "../constants/texts";

const SuccessAlert: React.FC = () => {
  return (
    <Paper
      sx={{ display: "flex", gap: 2, padding: "16px", borderRadius: "20px" }}
    >
      <img src="/check-circle.svg" />
      <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
        {TEXTS.voteSuccesfull}
      </Typography>
    </Paper>
  );
};

export default SuccessAlert;
