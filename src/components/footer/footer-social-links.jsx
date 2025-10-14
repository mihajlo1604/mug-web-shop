import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FlexBox from "components/flex-box/flex-box";
import { StyledIconButton } from "./styles";


// ==============================================================


// ==============================================================

export function FooterSocialLinks({
  variant = "light",
  links
}) {
  const {
    twitter,
    facebook,
    instagram,
    youtube,
    google
  } = links;
  return <FlexBox className="flex" mx={-0.625}>
      {twitter && <LinkItem variant={variant} Icon={XIcon} url={twitter} />}
      {facebook && <LinkItem variant={variant} Icon={FacebookIcon} url={facebook} />}
      {instagram && <LinkItem variant={variant} Icon={InstagramIcon} url={instagram} />}
      {youtube && <LinkItem variant={variant} Icon={YouTubeIcon} url={youtube} />}
      {google && <LinkItem variant={variant} Icon={GoogleIcon} url={google} />}
    </FlexBox>;
}
function LinkItem({
  url,
  Icon,
  variant
}) {
  return <a href={url} target="_blank" rel="noreferrer noopenner">
      <StyledIconButton variant={variant}>
        <Icon fontSize="inherit" className="icon" />
      </StyledIconButton>
    </a>;
}