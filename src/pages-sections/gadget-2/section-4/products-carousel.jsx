"use client";


// MUI
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

// GLOBAL CUSTOM COMPONENTS
import { Carousel, useCarousel } from "components/slider";


// STYLED COMPONENTS
const Heading = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "1.5rem",
  ".buttons-container": {
    gap: 8,
    display: "flex",
    alignItems: "center"
  }
}));
const StyledButtonBase = styled(ButtonBase, {
  shouldForwardProp: prop => prop !== "active"
})(({
  theme,
  active
}) => ({
  width: 32,
  height: 32,
  borderRadius: 8,
  transition: theme.transitions.create(["background-color", "color"], {
    duration: 200
  }),
  ...(active && {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main
  }),
  ...(!active && {
    ":hover": {
      backgroundColor: theme.palette.grey[100]
    }
  })
}));
export default function ProductsCarousel({
  children
}) {
  const {
    ref,
    api,
    arrows,
    options
  } = useCarousel({
    align: "start",
    slideSpacing: "24px",
    slidesToShow: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    }
  });
  return <>
      <Heading>
        <div>
          <Typography variant="h2" fontWeight={700} fontSize={{
          sm: 32,
          xs: 27
        }}>
            New Arrival Products
          </Typography>

          <Typography variant="body1" color="text.secondary" fontSize={{
          sm: 16,
          xs: 14
        }}>
            There are many variations passages
          </Typography>
        </div>

        <div className="buttons-container">
          <StyledButtonBase onClick={arrows.onClickPrev}>
            <SvgIcon>
              <path fill="currentColor" d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z" />
            </SvgIcon>
          </StyledButtonBase>

          <StyledButtonBase active onClick={arrows.onClickNext}>
            <SvgIcon>
              <path fill="currentColor" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" />
            </SvgIcon>
          </StyledButtonBase>
        </div>
      </Heading>

      <Carousel ref={ref} api={api} options={options}>
        {children}
      </Carousel>
    </>;
}