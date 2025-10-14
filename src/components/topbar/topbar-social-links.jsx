import X from "@mui/icons-material/X";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";

// GLOBAL CUSTOM COMPONENT
import FlexBox from "components/flex-box/flex-box";


// ==============================================================


// ==============================================================

export function TopbarSocialLinks({
  links
}) {
  const {
    twitter,
    facebook,
    instagram
  } = links;
  return <FlexBox alignItems="center" gap={1.5}>
      {twitter && <LinkItem Icon={X} url={twitter} />}
      {facebook && <LinkItem Icon={Facebook} url={facebook} />}
      {instagram && <LinkItem Icon={Instagram} url={instagram} />}
    </FlexBox>;
}
function LinkItem({
  Icon,
  url
}) {
  return <a href={url} target="_blank" style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}>
      <Icon sx={{
      fontSize: Icon.name === "X" ? 12 : 16
    }} />
    </a>;
}