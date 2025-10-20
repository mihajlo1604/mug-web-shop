"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutContent() {
  const { t } = useTranslation();
  return <Container sx={{ py: 6 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <Image src="/assets/images/withBackgroundLogo.png" alt="DOSE logo" width={260} height={86} />
        <Typography variant="h3" sx={{ color: "primary.main", fontWeight: 800 }}>
          {t("about.heading", { defaultValue: "About the Brand" })}
        </Typography>
        <Box sx={{ maxWidth: 900 }}> 
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("about.p1")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("about.p2")}
          </Typography>
          <Typography variant="body1">
            {t("about.p3")}
          </Typography>
        </Box>
      </Stack>
    </Container>;
}


