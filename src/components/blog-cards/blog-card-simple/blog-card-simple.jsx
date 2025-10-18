"use client";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns/format";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";

export default function BlogCardSimple({
  title,
  titleSr,
  date,
  description,
  descriptionSr,
  thumbnail,
  link = "#"
}) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  
  // Use translated content based on current language
  const displayTitle = currentLang === 'sr' && titleSr ? titleSr : title;
  const displayDescription = currentLang === 'sr' && descriptionSr ? descriptionSr : description;

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
    >
      <CardMedia
        sx={{
          height: { xs: 200, sm: 'auto' },
          width: { xs: '100%', sm: 300 },
          position: 'relative',
          flexShrink: 0
        }}
      >
        <Image
          fill
          src={thumbnail}
          alt={displayTitle}
          style={{ objectFit: 'cover' }}
        />
      </CardMedia>
      
      <CardContent sx={{ 
        flexGrow: 1, 
        display: 'flex', 
        flexDirection: 'column',
        p: 3
      }}>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 1 }}
        >
          {format(new Date(date), "MMM dd, yyyy")}
        </Typography>

        <Link href={link} style={{ textDecoration: 'none' }}>
          <Typography 
            variant="h6" 
            component="h3"
            sx={{ 
              mb: 2,
              fontWeight: 600,
              color: 'text.primary',
              '&:hover': {
                color: 'primary.main'
              }
            }}
          >
            {displayTitle}
          </Typography>
        </Link>

        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.6
          }}
        >
          {displayDescription}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Link 
            href={link}
            style={{ 
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 500
            }}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'primary.main',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              {currentLang === 'sr' ? 'Pročitaj Više →' : 'Read More →'}
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
