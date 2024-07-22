import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScoreProvider from "./Context/Score/ScoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ScoreProvider>
            <App />
        </ScoreProvider>
    </React.StrictMode>
);
