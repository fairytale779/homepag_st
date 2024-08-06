import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import { NavItem } from "./components";

interface NavItemProps {
  title: string;
  id: string;
  href: string;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleMobileMenuClick: () => void;
  pages: Array<{
    title: string;
    id: string;
    href?: string;
    children?: Array<NavItemProps>;
    hoverTitle?: string;
  }>;
}

const Topbar = ({ handleMobileMenuClick, pages = [] }: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={1}
      height="20px"
    >
      <Box
        display={"flex"}
        component="a"
        href="/"
        width={{ xs: 100, md: 120 }}
        marginLeft={"30px"}
      >
        <Box
          component={"img"}
          src={"/images/SIXT_logo.png"}
          height={1}
          width={1}
        />
      </Box>
      <Box
        sx={{ display: { xs: "none", md: "flex" } }}
        alignItems={"center"}
        marginRight={"30px"}
      >
        {pages.map((p, i) => (
          <Box key={i}>
            {!p.children ? (
              <Link
                href={p.href}
                color={"text.primary"}
                underline={"none"}
                data-hover-title={p.hoverTitle}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                  "&::before": {
                    content: `"${p.title}"`,
                  },
                  "&:hover::before": {
                    content: `"${p.hoverTitle}"`,
                  },
                  display: "inline-block",
                  width: "150px",
                  textAlign: "center",
                  fontWeight: 500,
                }}
              />
            ) : (
              <NavItem title={p.title} items={p.children} id={p.id} />
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => handleMobileMenuClick()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
