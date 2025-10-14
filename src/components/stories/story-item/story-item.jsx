import LazyImage from "components/LazyImage";
import { StyledRoot } from "./styles";


// ==============================================================


// ==============================================================

export default function StoryItem({
  image,
  handleClick
}) {
  return <StyledRoot onClick={handleClick}>
      <LazyImage src={image} alt="Story" width={197} height={360} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" quality={85} priority={false} />
    </StyledRoot>;
}