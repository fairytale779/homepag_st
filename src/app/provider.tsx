"use client";
import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import getTheme from "./theme";

export default function Provider({ children }: { children: React.ReactNode }) {
  const theme = getTheme("light");

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {children}
      </ThemeProvider>
    </>
  );
}
