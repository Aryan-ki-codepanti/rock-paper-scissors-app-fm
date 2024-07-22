import React, { useEffect, useState } from "react";
import ScoreContext from "./ScoreContext";

const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchScore = () => {
            const item = localStorage.getItem("rps-score");
            if (!item) localStorage.setItem("rps-score", 0);
            else setScore(prev => parseInt(item));
        };

        fetchScore();
    }, []);

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreProvider;
