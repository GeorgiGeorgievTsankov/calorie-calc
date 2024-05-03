import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponentStyle.css";
import MenuIcon from '@mui/icons-material/Menu';

export function NavbarComponent() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link className="img" to="/">CalorieCalc</Link>
                <div className="hiddenLinks">
                    <Link onClick={toggleNavbar} to="/"> Home </Link>
                    <Link onClick={toggleNavbar} to="/calculate"> Calculator </Link>
                    <Link onClick={toggleNavbar} to="/recipes"> Recipes </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/calculate"> Calculator </Link>
                <Link to="/recipes"> Recipes </Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}