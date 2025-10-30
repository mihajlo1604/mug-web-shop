import Container from "components/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BlogCardSimple from "components/blog-cards/blog-card-simple";
import api from "utils/__api__/blog";
import { mt } from "date-fns/locale";

export default async function BlogPage() {
  const blogs = await api.getBlogs();

  return (
    <Container sx={{ py: 4, mt: 2 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Blog
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Discover tips, guides, and insights about drinkware, hydration, and
          sustainable living.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <BlogCardSimple
              title={blog.title}
              titleSr={blog.titleSr}
              date={blog.date}
              description={blog.description}
              descriptionSr={blog.descriptionSr}
              thumbnail={blog.thumbnail}
              link={`/blog/${blog.slug}`}
            />
          </Grid>
        ))}
      </Grid>

      {blogs.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            No articles found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Check back later for new content!
          </Typography>
        </Box>
      )}
    </Container>
  );
}
