import React from 'react'
import Card from '../components/Card'
import { SearchNormal1 } from 'iconsax-react'
import Chart from '../components/Chart'
import Table from '../components/Table'

const Dashboard = () => {
    return (
        <div className='flex flex-col gap-7 w-full'>
            <div className='flex items-center justify-between pt-6'>
                <h1 className='text-black font-semibold text-lg'>Hello Shahrukh 👋,</h1>

                <div className="relative">
                    <SearchNormal1 fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="text-sm focus:outline-none active:outline-none w-[16rem] h-10 pl-11 pr-4 rounded-lg"
                    />
                </div>
            </div>
            <div className=''>
                <Card />
            </div>
            <div className=''>
                <Chart />
            </div>
            <div className=''>
                <Table />
            </div>

        </div>
    )
}

export default Dashboard
