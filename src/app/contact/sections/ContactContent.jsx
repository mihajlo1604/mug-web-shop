"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  AccessTime as TimeIcon
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Logo from "components/logo/Logo";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      {/* Header Section */}
      <Stack alignItems="center" textAlign="center" mb={6}>
        <Logo variant="bg" size={120} sx={{ mb: 2 }} />
        <Typography variant="h3" fontWeight={700} mb={2}>
          {t("contact.heading", { defaultValue: "Get in Touch" })}
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="600px">
          {t("contact.subtitle", { 
            defaultValue: "Have questions about our products? Need support? We'd love to hear from you. Send us a message and we'll respond as soon as possible." 
          })}
        </Typography>
      </Stack>

      {/* Contact Information */}
      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Card elevation={2}>
          <CardContent sx={{ p: 6 }}>
            <Typography variant="h5" fontWeight={600} mb={4} textAlign="center">
              {t("contact.info.title", { defaultValue: "Contact Information" })}
            </Typography>
            
            <Stack spacing={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <EmailIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    {t("contact.info.email", { defaultValue: "Email" })}
                  </Typography>
                  <Typography variant="h6" fontWeight={500}>
                    support@dose.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <PhoneIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    {t("contact.info.phone", { defaultValue: "Phone" })}
                  </Typography>
                  <Typography variant="h6" fontWeight={500}>
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <TimeIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary" mb={0.5}>
                    {t("contact.info.hours", { defaultValue: "Business Hours" })}
                  </Typography>
                  <Typography variant="h6" fontWeight={500}>
                    {t("contact.info.hours.detail", { 
                      defaultValue: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed" 
                    }).split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < 2 && <br />}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
