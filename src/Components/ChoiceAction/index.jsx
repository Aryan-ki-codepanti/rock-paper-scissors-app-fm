import React, { useContext, useState } from "react";
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

    const determineWinner = (e, choice) => {
        setUserChoice(prev => choice);
        if (!choice) return;

        let choices = ["paper", "scissor", "rock"].filter(x => x !== choice);

        let win = 0;
        const randInt = Math.random() > 0.5 ? 1 : 0;
        setHouseChoice(prev => choices[randInt]);

        // logic to decide winner
        if (choice === "paper") {
            if (houseChoice === "rock") {
                setResult(prev => "win");
                win = 1;
            }
            // scissor
            else setResult(prev => "lose");
        } else if (choice === "scissor") {
            if (houseChoice === "rock") setResult(prev => "lose");
            else {
                setResult(prev => "win");
                win = 1;
            }
        } else {
            // rock
            if (choice === "paper") setResult(prev => "lose");
            else {
                setResult(prev => "win");
                win = 1;
            }
        }
        if (win) incrementScore();
    };

    return (
        <div className="ChoiceAction container">
            {!userChoice ? (
                <div className="user-select">
                    <div
                        className="action paper"
                        onClick={e => determineWinner(e, "paper")}
                    >
                        <div className="inner">
                            <img src={paperImg} alt="paper-action" />
                        </div>
                    </div>
                    <div
                        className="action scissor"
                        onClick={e => determineWinner(e, "scissor")}
                    >
                        <div className="inner">
                            <img src={scissorImg} alt="scissor-action" />
                        </div>
                    </div>
                    <div
                        className="action rock"
                        onClick={e => determineWinner(e, "rock")}
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
