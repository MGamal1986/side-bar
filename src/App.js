import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Document from "./pages/Document/Document";
import Calender from "./pages/Calender/Calender";
import SideDrawerContext from "./context/SideDrawerContext";
import Layout from "./container/Layout/Layout";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false,
        };
        // to calculate time in used for mounting all app
        console.time();
    }

    componentDidMount() {
        // to calculate time in used for mounting all app
        console.timeEnd();
    }
    sideDrawerToggler = () => {
        this.setState((prev) => {
            return { showDrawer: !prev.showDrawer };
        });
    };
    render() {
        return (
            <div className="App">
                <SideDrawerContext.Provider
                    value={{
                        show: this.state.showDrawer,
                        sideDrawerToggler: this.sideDrawerToggler,
                    }}
                >
                    <BrowserRouter>
                        <Layout>
                            <Route path="/" exact component={Home} />
                            <Route path="/projects" exact component={Projects} />
                            <Route path="/document" exact component={Document} />
                            <Route path="/calender" exact component={Calender} />
                        </Layout>
                    </BrowserRouter>
                </SideDrawerContext.Provider>
            </div>
        );
    }
}

export default App;
