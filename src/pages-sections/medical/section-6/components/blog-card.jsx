import Link from "next/link";
import { format } from "date-fns/format";
import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";

// STYLED COMPONENTS
import { BlogCardWrapper } from "./styles";


// ==============================================================


// ==============================================================

export default async function BlogCard({
  date,
  image,
  title
}) {
  return <BlogCardWrapper>
      <div className="img-wrapper">
        <LazyImage src={image} width={379} height={246} alt={title} />
      </div>

      <div>
        <Typography variant="body1" className="date">
          {format(new Date(date), "dd MMMM, yyyy")}
        </Typography>

        <Link href="#">
          <Typography variant="h3" className="title">
            {title}
          </Typography>
        </Link>
      </div>
    </BlogCardWrapper>;
}