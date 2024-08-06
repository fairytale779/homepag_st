import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { NavItem } from "./components";

interface NavItemProps {
  title: string;
  id: string;
  href: string;
}

interface Props {
  pages: Array<{
    title: string;
    id: string;
    href?: string;
    children?: Array<NavItemProps>;
  }>;
}

const MobileMenu = ({ pages = [] }: Props): JSX.Element => {
  return (
    <Box mt={8}>
      {pages.map((p, i) => (
        <Box key={i} margin={2} textAlign="right">
          {!p.children ? (
            <Link
              href={p.href}
              color={"text.primary"}
              underline={"none"}
              sx={{
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              {p.title}
            </Link>
          ) : (
            <NavItem title={p.title} items={p.children} />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default MobileMenu;
