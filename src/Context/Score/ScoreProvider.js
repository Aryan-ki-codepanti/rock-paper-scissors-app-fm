import React, { useEffect, useState } from "react";
import ScoreContext from "./ScoreContext";

const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(prev => prev + 1);
        localStorage.setItem("rps-score", score + 1);
    };

    useEffect(() => {
        const fetchScore = () => {
            const item = localStorage.getItem("rps-score");
            if (!item) localStorage.setItem("rps-score", 0);
            else setScore(prev => parseInt(item));
        };

        fetchScore();
    }, []);

    return (
        <ScoreContext.Provider value={{ score, setScore, incrementScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreProvider;
