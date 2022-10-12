import React from 'react';
import { useLoaderData } from 'react-router-dom';
import"./Statistic.css"
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Statistic = () => {
    const statistic = useLoaderData();
    return (
        <div>
            <h1 className='st-h1'>Statistic of Quiz-Mania Mark Average</h1>
            <div className='chart'>
                <LineChart width={500} height={500} data={statistic.data}>
                    <Line type="monotone" dataKey="total" stroke="#003366" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis dataKey="total"></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

        </div>
    );
};

export default Statistic;