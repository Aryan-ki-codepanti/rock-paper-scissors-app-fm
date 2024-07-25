import React, { useContext, useEffect, useState } from "react";
import "./ChoiceAction.css";

import paperImg from "../../Images/icon-paper.svg";
import scissorImg from "../../Images/icon-scissors.svg";
import rockImg from "../../Images/icon-rock.svg";
import ScoreContext from "../../Context/Score/ScoreContext";

const ChoiceAction = () => {
    // {paper, scissor, rock , default : null}
    const [userChoice, setUserChoice] = useState(null);
    const [houseChoice, setHouseChoice] = useState(null);
    const [result, setResult] = useState(null);

    const { incrementScore } = useContext(ScoreContext);

    const imgMapper = {
        paper: paperImg,
        scissor: scissorImg,
        rock: rockImg
    };

    useEffect(() => {
        const determineWinner = () => {
            if (!userChoice) return;

            let choices = ["paper", "scissor", "rock"].filter(
                x => x !== userChoice
            );

            let win = 0;
            const randInt = Math.random() > 0.5 ? 1 : 0;
            setHouseChoice(prev => choices[randInt]);

            // logic to decide winner
            if (userChoice === "paper") {
                if (houseChoice === "rock") {
                    setResult(prev => "win");
                    win = 1;
                }
                // scissor
                else setResult(prev => "lose");
            } else if (userChoice === "scissor") {
                if (houseChoice === "rock") setResult(prev => "lose");
                else {
                    setResult(prev => "win");
                    win = 1;
                }
            } else {
                // rock
                if (houseChoice === "paper") setResult(prev => "lose");
                else {
                    setResult(prev => "win");
                    win = 1;
                }
            }

            if (win) incrementScore();
        };

        determineWinner();
    }, [userChoice, houseChoice, incrementScore]);

    return (
        <div className="ChoiceAction container">
            {!userChoice ? (
                <div className="user-select">
                    <div
                        className="action paper"
                        onClick={e => setUserChoice(prev => "paper")}
                    >
                        <div className="inner">
                            <img src={paperImg} alt="paper-action" />
                        </div>
                    </div>
                    <div
                        className="action scissor"
                        onClick={e => setUserChoice(prev => "scissor")}
                    >
                        <div className="inner">
                            <img src={scissorImg} alt="scissor-action" />
                        </div>
                    </div>
                    <div
                        className="action rock"
                        onClick={e => setUserChoice(prev => "rock")}
                    >
                        <div className="inner">
                            <img src={rockImg} alt="rock-action" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="result">
                    <div className={result === "win" ? "you win" : "you"}>
                        <span>You Picked</span>
                        <div className={`action ${userChoice}`}>
                            <div className="inner">
                                <img
                                    src={imgMapper[userChoice]}
                                    alt={`${userChoice}-action`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="control">
                        <h1>You {result}</h1>
                        <button onClick={e => setUserChoice(prev => null)}>
                            Play Again
                        </button>
                    </div>
                    <div className={result === "lose" ? "house win" : "house"}>
                        <span>The house picked</span>
                        <div className={`action ${houseChoice}`}>
                            <div className="inner">
                                <img
                                    src={imgMapper[houseChoice]}
                                    alt={`${houseChoice}-action`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChoiceAction;
