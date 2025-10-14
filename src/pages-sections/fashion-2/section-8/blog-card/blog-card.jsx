import Link from "next/link";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import { NavLink3 } from "components/nav-link";

// STYLED COMPONENTS
import { RootStyle, ImageBox, DateBox } from "./styles";


// =====================================================


// =====================================================

export default function BlogCard({
  image,
  title,
  date,
  description
}) {
  return <RootStyle>
      <ImageBox>
        <LazyImage width={580} height={272} src={image} alt="blog-1" />

        <DateBox>
          <p>{date}</p>
        </DateBox>
      </ImageBox>

      <div className="content">
        <Link href="/">
          <h4>{title}</h4>
        </Link>
        <p className="description">{description}</p>
        <NavLink3 text="Read More" href="/" />
      </div>
    </RootStyle>;
}