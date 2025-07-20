import React, { useState } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { enrolmentOverTime } from "../dataset";

const EnrolmentChart = ({ t }) => {
    const [selectedUni, setSelectedUni] = useState("all");

    const universities = ["uOttawa", "mcGill", "uToronto"];
    const uniNames = {
        uOttawa: "uOttawa",
        mcGill: "McGill",
        uToronto: "UofT"
    };

    return (
        <div>
            <h2>{t.lineChartTitle}</h2>

            <label>{t.fieldLegend}: </label>
            <select value={selectedUni} onChange={(e) => setSelectedUni(e.target.value)} style={{ marginBottom: "1rem" }}>
                <option value="all">All</option>
                {universities.map((uni) => (
                    <option key={uni} value={uni}>
                        {uniNames[uni]}
                    </option>
                ))}
            </select>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={enrolmentOverTime}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: t.xAxisYear, position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: t.yAxisStudents, angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />

                    {(selectedUni === "all" || selectedUni === "uOttawa") && (
                        <Line type="monotone" dataKey="uOttawa" stroke="#8884d8" name="uOttawa" />
                    )}
                    {(selectedUni === "all" || selectedUni === "mcGill") && (
                        <Line type="monotone" dataKey="mcGill" stroke="#82ca9d" name="McGill" />
                    )}
                    {(selectedUni === "all" || selectedUni === "uToronto") && (
                        <Line type="monotone" dataKey="uToronto" stroke="#ffc658" name="UofT" />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default EnrolmentChart;
