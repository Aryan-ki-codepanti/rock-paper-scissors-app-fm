import React, { useState } from "react";
import "./ChoiceAction.css";

import paperImg from "../../Images/icon-paper.svg";
import scissorImg from "../../Images/icon-scissors.svg";
import rockImg from "../../Images/icon-rock.svg";

const ChoiceAction = () => {
    // {paper, scissor, rock , default : null}
    const [userChoice, setUserChoice] = useState(null);

    const imgMapper = {
        paper: paperImg,
        scissor: scissorImg,
        rock: rockImg
    };

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
                    <div className="you win">
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
                        <h1>You Win</h1>
                        <button onClick={e => setUserChoice(prev => null)}>
                            Play Again
                        </button>
                    </div>
                    <div className="house">
                        <span>The house picked</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChoiceAction;
