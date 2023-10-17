import React from 'react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data = [
    { name: "Group A", value: 2400, innerRadius: 40, outerRadius: 60 },
    { name: "Group B", value: 4567, innerRadius: 50, outerRadius: 70 },
    { name: "Group C", value: 1398, innerRadius: 60, outerRadius: 80 }
];

const NewChart = () => {
    return (
        <div>
            <PieChart width={1000} height={400}>
                {data.map((entry, index) => (
                    <Pie
                        key={`pie-${index}`}
                        dataKey="value"
                        data={[entry]}
                        cx={500}
                        cy={200}
                        innerRadius={entry.innerRadius}
                        outerRadius={entry.outerRadius}
                        fill="#82ca9d"
                    />
                ))}
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default NewChart
