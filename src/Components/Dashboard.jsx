
import React from 'react'
import Card from './Card'
import { FaBox, FaCogs, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { dataBar, comboChartData } from '../assets/ChartData'
import { Bar } from 'react-chartjs-2'
import { Chart } from "react-google-charts";
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const data4 = [
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
    ];

    return (

        <div className='grow p-8'>

            <h2 className='text-2xl mb-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                <Card icon={<FaShoppingCart />} title="Orders" value="300+" />
                <Card icon={<FaBox />} title="Products" value="90+" />
                <Card icon={<FaUsers />} title="Users" value="35+" />
                <Card icon={<FaCogs />} title="Settings" value="10+" />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-4'>Sales Data</h3>
                    <Bar data={comboChartData} />
                </div>

                <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>

                
                    <h3 className='text-lg font-semibold mb-4'>Products Data</h3>
                    <Bar data={dataBar} />
                </div>

                <div className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md'>
                    <h3 className='text-lg font-semibold mb-4'>Visitors Analytics</h3>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width={"100%"}
                        height={"250px"}
                    />
                </div>

                <div className='bg-white p-4 dark:bg-gray-800  shadow-md'>
                    <h3 className='text-lg font-semibold mb-4'>Region labels</h3>
                    <Chart
                        chartType="GeoChart"
                        width={"100%"}
                        height={"250px"}
                        data={data4}
                    />
                </div>
            </div>

        </div>
    )
}

export default Dashboard