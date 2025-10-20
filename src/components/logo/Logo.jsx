"use client";

import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";

export default function Logo({
  href = "/",
  size = 120,
  alt = "DOSE logo",
  variant = "plain",
}) {
  const src =
    variant === "bg"
      ? "/assets/images/withBackgroundLogo.png"
      : "/assets/images/DoseLogo.png";
  return (
    <Box
      component={Link}
      href={href}
      sx={{ display: "inline-flex", alignItems: "center" }}
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={Math.round(size * 0.33)}
        priority
      />
    </Box>
  );
}
