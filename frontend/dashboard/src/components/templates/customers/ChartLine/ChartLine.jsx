import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      NewCustomer: 65,
      amt: 0,
    },
    {
      name: 'Feb',
      NewCustomer: 78,
      amt: 20,
    },
    {
      name: 'Mar',
      NewCustomer: 90,
      amt: 40,
    },
    {
      name: 'Apr',
      NewCustomer: 85,
      amt: 60,
    },
    {
      name: 'May',
      NewCustomer: 95,
      amt: 80,
    },
    {
      name: 'Jun',
      NewCustomer: 110,
      amt: 120,
    },
  ];
function ChartLine() {
  return (
    <ResponsiveContainer width={'100%'} height={300} style={{marginTop:'1rem'}}>
        <LineChart
             width={100}
             height={300}
             data={data}
        >
        <CartesianGrid strokeDasharray="0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="NewCustomer" stroke="#3498db"/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine