"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

export default function FaqClient() {
  const { t } = useTranslation();

  const items = [
    { q: t("faq.shipping.q"), a: t("faq.shipping.a") },
    { q: t("faq.returns.q"), a: t("faq.returns.a") },
    { q: t("faq.care.q"), a: t("faq.care.a") },
    { q: t("faq.materials.q"), a: t("faq.materials.a") },
    { q: t("faq.insulation.q"), a: t("faq.insulation.a") },
    { q: t("faq.warranty.q"), a: t("faq.warranty.a") }
  ];

  return (
    <Container sx={{ py: { xs: 4, md: 8 } }}>
      <Stack spacing={3} sx={{ mb: 3 }}>
        <Typography variant="h3" fontWeight={700}>
          {t("faq.title")}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t("faq.subtitle")}
        </Typography>
      </Stack>

      <Box>
        {items.map((item, idx) => (
          <Accordion key={idx} sx={{ bgcolor: "background.paper" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}


