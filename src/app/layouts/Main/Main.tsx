import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";

//

import { Footer, MobileMenu, Topbar } from "./components";

import Container from "@/app/components/Container";
import pages from "../navigation";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleMobileMenuClick = (): void => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const open = isMd ? false : openMobileMenu;

  return (
    <Box>
      <Box position={"sticky"} zIndex={theme.zIndex.appBar}>
        <AppBar
          sx={{
            backgroundColor: theme.palette.background.paper,
          }}
          elevation={0}
        >
          <Container paddingY={2}>
            <Topbar
              handleMobileMenuClick={handleMobileMenuClick}
              pages={pages}
            />
          </Container>
        </AppBar>
      </Box>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Container paddingY={0}>
          <MobileMenu pages={pages} />
        </Container>
      </Collapse>
      <main>
        {children}
        <Divider />
      </main>
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
