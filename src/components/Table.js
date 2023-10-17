import React from 'react'
import { ArrowDown2, SearchNormal1 } from "iconsax-react";
import Image1 from '../assests/images/Abstract.jpg'
import Image2 from '../assests/images/Illustration.jpg'
const Table = () => {
    return (
        <div className='flex items-center justify-between rounded-lg'>
            <div className="bg-zinc-50 rounded-lg p-6 w-[100%]">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className='text-lg text-black font-bold'>Overview</h1>
                    </div>
                    <div className='flex items-center justify-center relative gap-x-2 '>
                        <SearchNormal1 fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" size={18} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="text-sm focus:outline-none active:outline-none w-[16rem] h-10 pl-11 pr-4 rounded-lg bg-gray-100 "
                        />
                        <div className="flex items-center justify-center text-gray-400 font-md text-sm rounded-lg w-[7rem] h-10 pr-5 bg-gray-100 font-sans">last 30 days</div>
                        <div className="">
                            <ArrowDown2 fontSize={20} className="text-gray-400 absolute top-1/2 right-3 -translate-y-1/2" size={15} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-5'>
                    <div className=''>
                        <p className='text-gray-400 font-md text-sm font-sans'>Product Name</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <p className='text-gray-400 font-md text-sm px-10 font-sans'>Stock</p>
                        </div>
                        <div className=''>
                            <p className='text-gray-400 font-md text-sm px-10 font-sans'>Price</p>
                        </div>
                        <div className=''>
                            <p className='text-gray-400 font-md text-sm px-10 font-sans'>Total Sales</p>
                        </div>
                    </div>
                </div>
                <hr className='mt-3' />
                <div className='flex items-center justify-between py-4'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <img src={Image1} className='rounded-lg w-20 h-12' />
                        </div>
                        <div className='px-5'>
                            <div className=''>
                                <p className='text-black-400 font-bold text-md font-sans'>Abstract 3D</p>
                            </div>
                            <div className=''>
                                <p className='text-gray-400 font-md text-sm font-sans'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=''>
                            <p className='text-black-400 font-md text-sm px-6 lg:px-0 font-sans'>32 in stock</p>
                        </div>
                        <div className=''>
                            <p className='text-black-400 font-semibold text-sm px-8 font-sans'>$ 45.99</p>
                        </div>
                        <div className=''>
                            <p className='text-black-400 font-lg text-sm px-16 font-sans'>20</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <img src={Image2} className='rounded-lg w-20 h-12' />
                        </div>
                        <div className='px-5'>
                            <div className=''>
                                <p className='text-black-400 font-bold text-md font-sans'>Saphrens Illustration</p>
                            </div>
                            <div className=''>
                                <p className='text-gray-400 font-md text-sm font-sans'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className=''>
                            <p className='text-black-400 font-md text-sm px-6 lg:px-0 font-sans'>32 in stock</p>
                        </div>
                        <div className=''>
                            <p className='text-black-400 font-semibold text-sm px-8 font-sans'>$ 45.99</p>
                        </div>
                        <div className=''>
                            <p className='text-black-400 font-lg text-sm px-16 font-sans'>20</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Table
