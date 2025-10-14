import Typography from "@mui/material/Typography";

// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";

// STYLED COMPONENTS
import { ImageWrapper, Wrapper } from "./styles";


// ==============================================================


// ==============================================================

export default function TestimonialCard({
  testimonial: {
    comment,
    user
  }
}) {
  return <Wrapper>
      <div className="user-info">
        <ImageWrapper>
          <LazyImage src={user.avatar} width={240} height={240} alt="User" />
        </ImageWrapper>

        <div>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1" color="grey.600">
            {user.designation}
          </Typography>
        </div>
      </div>

      <Typography variant="body1">{comment}</Typography>
    </Wrapper>;
}