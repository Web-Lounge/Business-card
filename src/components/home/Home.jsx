import React from "react";
import "./Home.module.css";
import Cases from "../cases/CasesAndInfo";
import Feedback from "../feedback/Feedback";

const Home = (props) => {
    return (
        <div className='home'>
            <div>
                Home
            </div>

            <Cases/>
            <Feedback/>
        </div>
    );
}

export default Home;
