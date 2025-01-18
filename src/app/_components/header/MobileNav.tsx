import { yekan } from "@/utils/fonts";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav: React.FC<{ pages: string[] }> = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="open navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Link href={page} className={`${yekan.className} text-sm`}>
              {page}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNav;
