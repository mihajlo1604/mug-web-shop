import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import FlexBetween from "components/flex-box/flex-between";

// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "lib";


// ==============================================================


// ==============================================================

export default function ListItem({
  title,
  value
}) {
  return <FlexBetween mb={1}>
      <Typography variant="body1" color="text.secondary">
        {title}:
      </Typography>

      <Typography variant="h6">{value ? currency(value) : "-"}</Typography>
    </FlexBetween>;
}