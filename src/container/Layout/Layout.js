import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import SideDrawer from "../../component/SideDrawer/SideDrawer";
import Aux from "../../hoc/Auxliary";

function Layout(props) {
    return (
        <Aux>
            <NavBar />
            <SideDrawer />
            {props.children}
        </Aux>
    );
}

export default Layout;
