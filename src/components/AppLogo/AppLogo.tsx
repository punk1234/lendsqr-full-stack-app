import React from "react";

const LENDSQR_LOGO_URL = "/images/lendsqr-logo.svg";

interface IProps {
  size: number;
}

export function AppLogo({ size }: IProps) {
  return (
    <img
      src={LENDSQR_LOGO_URL}
      alt="LENDSQR LOGO"
      width={size || "100%"}
    />
  );
}