import React from 'react'
import { WalletMoney, NoteText, MoneyRecive, Bag2 } from 'iconsax-react'

const StatisticBox = ({ icon, bgColor, title, value, percentage, isPositive }) => {
  return (
    <div className="flex items-center bg-zinc-50 rounded-lg px-3 py-4 w-[23.5%]">
      <div className={`rounded-full w-36 h-36 xl:w-28 xl:h-28 lg:h-14 lg:w-14 flex items-center justify-center p-4 ${bgColor}`}>
        {icon}
      </div>
      <div className="w-[64%] lg:w-[70%] pl-4 lg:pl-1.5">
        <span className="text-sm text-gray-400 font-base font-sans">{title}</span>
        <div className="flex items-center">
          <p className="text-2xl text-gray-700 font-bold font-sans">{value}</p>
        </div>
        <div className='flex items-center'>
          {percentage !== undefined && (
            <div className={`text-md lg:text-sm font-semibold lg:font-medium font-sans ${isPositive ? 'text-green-500 ' : 'text-red-500'}`}>
              {isPositive ? <span className="text-green-500 font-sans ">&#8593;</span> : <span className="text-red-500">&#8595;</span>}
              {percentage}%
            </div>
          )}
          <div className='p-1 text-sm lg:text-xs font-medium lg:font-normal font-sans'>
            {title === "Total Sales" ? "this week" : "this month"}
          </div>
        </div>
      </div>
    </div>
  );
}



const Card = () => { 
  return (
    <div className="w-full flex items-center justify-between">
      <StatisticBox
        icon={<MoneyRecive className="w-full h-full text-2xl font-bold text-green-600 p-2 lg:p-0"/>}
        bgColor="bg-green-200"
        title="Earning"
        value="$198k"
        percentage="37.8"
        isPositive={true}
      />
      <StatisticBox
        icon={<NoteText className="w-full h-full text-2xl font-bold text-purple-600 p-2 lg:p-0"/>}
        bgColor="bg-purple-200"
        title="Orders"
        value="$2.4k"
        percentage="2.1"
        isPositive={false}
      />
      <StatisticBox
        icon={<WalletMoney className="w-full h-full text-2xl font-bold text-blue-600 p-2 lg:p-0"/>}
        bgColor="bg-blue-200"
        title="Balance"
        value="$2.4k"
        percentage="2.1"
        isPositive={false}
      />
      <StatisticBox
        icon={<Bag2 className="w-full h-full text-2xl font-bold text-pink-600 p-2 lg:p-0"/>}
        bgColor="bg-pink-200"
        title="Total Sales"
        value="$89k"
        percentage="11"
        isPositive={true}
      />
    </div>
  )
}

export default Card
