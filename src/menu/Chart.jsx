import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: '탄수화물', value: 40 },
    { name: '단백질', value: 30 },
    { name: '지방', value: 30 }
];
const COLORS = ['#FCCB6F', '#40003A', '#FD5E5B'];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    render() {
        return (
        <PieChart width={200} height={300} onMouseEnter={this.onPieEnter}>
            <Pie
            data={data}
            cx={100}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
        </PieChart>
        );
    }
}
