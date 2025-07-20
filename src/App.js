import React, { useState } from "react";
import EnrolmentChart from "./data/components/EnrolmentChart";
import FieldChart from "./data/components/FieldChart";
import { translations } from "./i18n/translations";
import "./App.css";

function App() {
    const [language, setLanguage] = useState("en");
    const t = translations[language];

    return (
        <div className="App">
            <h1>{t.title}</h1>

            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <label>{t.language}: </label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                </select>
            </div>

            <EnrolmentChart t={t} />
            <FieldChart t={t} />
        </div>
    );
}

export default App;
