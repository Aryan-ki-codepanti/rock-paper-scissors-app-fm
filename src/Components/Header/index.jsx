import React, { useContext } from "react";
import "./Header.css";
import ScoreContext from "../../Context/Score/ScoreContext";

const Header = () => {
    const { score } = useContext(ScoreContext);
    return (
        <div className="container Header">
            <div className="title">
                <h1>Rock</h1>
                <h1>Paper</h1>
                <h1>Scissors</h1>
            </div>

            <div className="score">
                <span>Score</span>
                <span>{score}</span>
            </div>
        </div>
    );
};

export default Header;
