
import { ArrowDown2 } from "iconsax-react";
import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell, Label } from "recharts";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";


const data = [
    {
        name: "Jan",
        uv: 2400,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        uv: 2000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Mar",
        uv: 4000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Apr",
        uv: 3000,
        pv: 3908,
        amt: 2000
    },
    {
        name: "May",
        uv: 3490,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Jun",
        uv: 1890,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Jul",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Aug",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Sep",
        uv: 3800,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Oct",
        uv: 3000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Nov",
        uv: 2800,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Dec",
        uv: 3200,
        pv: 4800,
        amt: 2181
    }
];

const data01 = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 220 },
    { name: "Group C", value: 200 }
];

const COLORS = ['#E4B5CB', '#F3EBFF', '#722AE6',];

const Chart = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = data[activeIndex];

    const handleClick = useCallback(
        (entry: any, index: number) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    return (
        <div className='flex items-center justify-between rounded-lg'>
            <div className="bg-zinc-50 rounded-lg p-6 w-[65%]">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className='text-lg text-black font-bold font-sans'>Overview</h1>
                        <p className='text-gray-400 font-md text-sm font-sans'>Monthly Earning</p>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-gray-100 relative">
                        <div className="flex items-center justify-center text-gray-400 font-md text-sm rounded-lg w-[7rem] h-10 pr-5 bg-gray-100 font-sans">Quarterly</div>
                        <div className="">
                            <ArrowDown2 fontSize={20} className="text-gray-400 absolute top-1/2 right-3 -translate-y-1/2 bg-gray-100" size={15} />
                        </div>
                    </div>
                </div>
                <div className="mt-3 w-full flex-1 h-full text-xs">
                <ResponsiveContainer width="100%" height={240}>
                    <BarChart width={960} height={250} data={data} barCategoryGap={10}>
                        <Bar dataKey="uv" onClick={handleClick} radius={[10, 10, 10, 10]} className="flex justify-between px-8">
                            {data.map((entry, index) => (
                                <Cell
                                    cursor="pointer"
                                    fill={index === activeIndex ? "#4a46e3" : "#f3ebff"}
                                    key={`cell-${index}`}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                    <div className="flex justify-between px-8">
                        {data.map((entry, index) => (
                            <div key={`month-${index}`} className={`text-center text-sm font-sans ${index === activeIndex ? "font-bold" : ""} `}>
                                {entry.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-zinc-50 rounded-lg p-6 w-[32.5%]">
                <div className="">
                    <h1 className='text-lg text-black font-bold font-sans'>Customers</h1>
                    <p className='text-gray-400 font-md text-sm font-sans'>Customers that buy products</p>
                </div>
                <div className="flex items-center justify-center py-4">
                    <div className="h-60 w-60 bg-white rounded-full">
                        <PieChart width={500} height={300}>
                            <Pie
                                data={data01}
                                cx={115}
                                cy={120}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                                <Label
                                    value="65%"
                                    position="center"
                                    fill="#000"
                                    fontSize={30}
                                    dy={-20}
                                />
                                <Label
                                    value="Total New"
                                    position="center"
                                    fill="#000"
                                    fontSize={15}
                                    dy={5} // Adjust vertical position
                                />
                                <Label
                                    value="Customers"
                                    position="center"
                                    fill="#000"
                                    fontSize={15}
                                    dy={20}
                                />

                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart
