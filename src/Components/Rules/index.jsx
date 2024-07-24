import React, { useState } from "react";
import "./Rules.css";

import crossImg from "../../Images/icon-close.svg";
import rulesImg from "../../Images/image-rules.svg";

const Rules = () => {
    const [showRules, setShowRules] = useState(false);

    return (
        <div className="Rules container">
            {!showRules && (
                <button
                    onClick={e => setShowRules(prev => true)}
                    className="rule-btn"
                >
                    Rules
                </button>
            )}

            {showRules && (
                <div className="ruleBox">
                    <div className="ruleModal">
                        <div className="rules-header">
                            <h1>Rules</h1>
                            <div
                                className="cross"
                                onClick={e => setShowRules(prev => false)}
                            >
                                <img src={crossImg} alt="close-icon" />
                            </div>
                        </div>

                        <div className="rules-body">
                            <img src={rulesImg} alt="rules-pic" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rules;
