import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./SideDrawer.module.scss";
import SideDrawerContext from "../../context/SideDrawerContext";
import {
    FaHome,
    FaProjectDiagram,
    FaFolderOpen,
    FaRegCalendarAlt,
    FaRegWindowClose,
} from "react-icons/fa";
function SideDrawer() {
    const { show, sideDrawerToggler } = useContext(SideDrawerContext);
    let attchedClass = [classes.SideDrawer, show ? classes.Show : null].join(" ");

    const hideSideDrawer = () => {
        setTimeout(() => {
            sideDrawerToggler();
        }, 250);
    };
    return (
        <nav className={attchedClass}>
            <div className={classes.Close} onClick={hideSideDrawer}>
                <FaRegWindowClose />
            </div>
            <div className={classes.Brand}>
                <Link to="/">ZARA</Link>
            </div>
            <ul className={classes.Menu}>
                <li>
                    <NavLink exact activeClassName={classes.Active} to="/" onClick={hideSideDrawer}>
                        <FaHome />
                        <span>home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={classes.Active}
                        to="/projects"
                        onClick={hideSideDrawer}
                    >
                        <FaProjectDiagram />
                        <span>project</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={classes.Active}
                        to="/calender"
                        onClick={hideSideDrawer}
                    >
                        <FaRegCalendarAlt />
                        <span>calender</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeClassName={classes.Active}
                        to="/document"
                        onClick={hideSideDrawer}
                    >
                        <FaFolderOpen />
                        <span>document</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default SideDrawer;
