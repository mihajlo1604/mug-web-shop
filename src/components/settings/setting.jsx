"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// MUI
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Close from "@mui/icons-material/Close";
import Settings from "@mui/icons-material/Settings";

// LOCAL CUSTOM COMPONENTS
import FlexBox from "../flex-box/flex-box";
import OverlayScrollbar from "../overlay-scrollbar";

// GLOBAL CUSTOM HOOK
import useSettings from "hooks/useSettings";

// STYLED COMPONENTS
import { BodyWrapper, MainContainer, StyledAvatar, StyledIconButton } from "./styles";
export default function Setting() {
  const {
    push
  } = useRouter();
  const [showBody, setShowBody] = useState(false);
  const {
    updateSettings,
    settings
  } = useSettings();
  return <ClickAwayListener onClickAway={() => setShowBody(false)}>
      <MainContainer>
        <Tooltip title="Settings & Demos" placement="left">
          <StyledIconButton onClick={() => setShowBody(state => !state)}>
            {showBody ? <Close /> : <Settings className="settings-icon" />}
          </StyledIconButton>
        </Tooltip>

        <BodyWrapper showBody={showBody ? 1 : 0}>
          <OverlayScrollbar sx={{
          maxHeight: showBody ? "calc(100vh - 200px)" : 0
        }}>
            <FlexBox gap={2}>
              <Button fullWidth onClick={() => updateSettings({
              direction: "rtl"
            })} color={settings.direction === "rtl" ? "primary" : "secondary"} variant={settings.direction === "rtl" ? "contained" : "outlined"}>
                RTL
              </Button>

              <Button fullWidth onClick={() => updateSettings({
              direction: "ltr"
            })} color={settings.direction === "ltr" ? "primary" : "secondary"} variant={settings.direction === "ltr" ? "contained" : "outlined"}>
                LTR
              </Button>
            </FlexBox>

            <Divider sx={{
            my: 3
          }} />

            <Typography variant="h6" sx={{
            mb: 2,
            textAlign: "center"
          }}>
              Bazaar Demos
            </Typography>

            <FlexBox gap={2} flexWrap="wrap">
              {demos.map(demo => <StyledAvatar key={demo.id} src={demo.img} onClick={() => push(demo.path)} />)}
            </FlexBox>
          </OverlayScrollbar>
        </BodyWrapper>
      </MainContainer>
    </ClickAwayListener>;
}
// Market-1 only - removed all other shop demos
const demos = [{
  id: 0,
  path: "/",
  img: "/assets/images/landing/page-1.png"
}];