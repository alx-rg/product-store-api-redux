import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css"
import { Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/ThumbUpAlt"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Typography >
          <Link to={`/`}>
          <h2>AchèteLeTruc</h2>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header