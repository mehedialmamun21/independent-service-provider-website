import React from 'react';

import { Pie, PieChart } from 'recharts';

const Rechart = () => {

    const data01 = [
        {
            "name":'primary',
            "success": 98,
            "failure": 2,
        },
        {
            "name":'secondary',
            "success": 90,
            "failure": 10,
        },
        {
            "name":'Higher secondary',
            "success": 85,
            "failure": 15,
        }
        
    ];

    const data02 = [
        {
            "name":'primary',
            "male": 78,
            "female": 20,
        },
        {
            "name":'secondary',
            "male": 40,
            "female": 60,
        },
        {
            "name":'Higher secondary',
            "male": 65,
            "female": 35,
        }
    ];


    return (
        <div>
        <PieChart width={730} height={250}>
            <Pie data={data01}
                dataKey="success"
                nameKey="failure"
                cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02}
                dataKey="male"
                nameKey="female"
                cx="50%"
                cy="50%"
                innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
    </div>
    );
};

export default Rechart;