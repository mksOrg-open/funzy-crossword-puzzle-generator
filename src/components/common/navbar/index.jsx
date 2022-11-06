import React from "react";
import Box from "@mui/material/Box";
import AppBar from "../../styledComponents/AppBar";
import Toolbar from "../../styledComponents/Toolbar";
import {Link} from "@mui/material";

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ flex: 1 }} />
                <Link
                    variant="h6"
                    underline="none"
                    color="inherit"
                    href="/"
                    sx={{ fontSize: 24 }}
                >
                    {'Funzy Crossword Puzzle'}
                </Link>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Link
                        variant="h6"
                        color="inherit"
                        underline="none"
                        href=""
                        sx={rightLink}
                    >
                        {'Sign In'}
                    </Link>
                    <Link
                        variant="h6"
                        underline="none"
                        href=""
                        sx={{ ...rightLink, color: 'secondary.main' }}
                    >
                        {'Sign Up'}
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
