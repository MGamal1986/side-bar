import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import SideDrawerContext from "../../context/SideDrawerContext";

function NavBar() {
    const { sideDrawerToggler } = useContext(SideDrawerContext);
    return (
        <nav className={classes.Navbar}>
            <div className={classes.Brand}>
                <Link to="/">ZARA</Link>
            </div>
            <div className={classes.Icon} onClick={sideDrawerToggler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={classes.NavMenu}>
                <li>
                    <NavLink exact activeClassName={classes.Active} to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.Active} to="/projects">
                        project
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.Active} to="/calender">
                        calender
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.Active} to="/document">
                        document
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
