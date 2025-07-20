import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { enrolmentByField } from "../dataset";

const FieldChart = ({ t }) => {
    return (
        <div>
            <h2>{t.barChartTitle}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={enrolmentByField}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="field" label={{ value: t.fieldLegend, position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: t.yAxisStudents, angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Bar dataKey="students" fill="#8884d8" name={t.yAxisStudents} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FieldChart;
