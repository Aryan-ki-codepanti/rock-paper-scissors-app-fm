import React, { useState } from "react";
import "./ChoiceAction.css";

import paperImg from "../../Images/icon-paper.svg";
import scissorImg from "../../Images/icon-scissors.svg";
import rockImg from "../../Images/icon-rock.svg";

const ChoiceAction = () => {
    const [userChoice, setUserChoice] = useState(null);

    return (
        <div className="ChoiceAction container">
            {!userChoice && (
                <div className="user-select">
                    <div className="action paper">
                        <img src={paperImg} alt="paper-action" />
                    </div>
                    <div className="action scissor">
                        <img src={scissorImg} alt="scissor-action" />
                    </div>
                    <div className="action rock">
                        <img src={rockImg} alt="rock-action" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChoiceAction;
