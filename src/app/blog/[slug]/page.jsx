"use client";
import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "components/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import { format } from "date-fns/format";
import api from "utils/__api__/blog";
import { mt } from "date-fns/locale";

export default function BlogArticlePage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const blogData = await api.getBlogBySlug(params.slug);
        if (blogData) {
          setBlog(blogData);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError("Failed to load article");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <Container sx={{ py: 4, mt: 2, textAlign: "center" }}>
        <Typography variant="h4">{t("blog.loading")}</Typography>
      </Container>
    );
  }

  if (error || !blog) {
    return (
      <Container sx={{ py: 4, mt: 2, textAlign: "center" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {error || t("blog.noArticles")}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/blog")}
          sx={{ mt: 2 }}
        >
          {t("blog.backToBlog")}
        </Button>
      </Container>
    );
  }

  const currentLang = i18n.language || "en";

  // Use translated content based on current language
  const displayTitle =
    currentLang === "sr" && blog.titleSr ? blog.titleSr : blog.title;
  const displayContent =
    currentLang === "sr" && blog.contentSr ? blog.contentSr : blog.content;

  return (
    <Container sx={{ py: 4, maxWidth: 800 }}>
      {/* Back button */}
      <Box sx={{ mb: 4 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/blog")}
          sx={{ mb: 3 }}
        >
          {t("blog.backToBlog")}
        </Button>
      </Box>

      {/* Article header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          {displayTitle}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          {t("blog.postedOn")} {format(new Date(blog.date), "MMMM dd, yyyy")}
        </Typography>
      </Box>

      {/* Article image */}
      <Box
        sx={{
          mb: 4,
          position: "relative",
          height: 400,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          fill
          src={blog.thumbnail}
          alt={displayTitle}
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Article content */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.8,
            fontSize: "1.1rem",
            whiteSpace: "pre-line",
          }}
        >
          {displayContent}
        </Typography>
      </Box>

      {/* Back to blog button */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/blog")}
          size="large"
        >
          {t("blog.backToBlog")}
        </Button>
      </Box>
    </Container>
  );
}
