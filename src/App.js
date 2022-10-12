import React from "react";
import "./App.css";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

const App = (props) => {

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        console.log(pathname)
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    return (
        <div className="app-wrapper">
            <div className='app-wrapper-content'>
                <ScrollToTop/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
            </div>

            <div className='app-wrapper-footer'>
                <Footer/>
            </div>
        </div>
    );
}
export default App;
