
import { Setting, KeySquare, I3DSquare, DiscountShape, WalletMoney, MessageQuestion, UserSquare, ArrowRight2, ArrowDown2 } from 'iconsax-react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import UserImage from '../assests/images/User Image.jpg'

const SubMenu = ({ subItems }) => {
    return (
        <ul>
            {subItems.map((subItem, index) => (
                <li key={index}>
                    <NavLink to={subItem.href}>
                        <span className="flex gap-x-3 p-2 text-sm leading-6 font-medium align-center text-white hover:text-white">
                            {subItem.name}
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}

const SideBar = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const navigation = [
        { name: "DashBoard", href: "/", icon: KeySquare, subItems: [] },
        {
            name: "Product", href: "/product", icon: I3DSquare,
            subItems: [
                { name: "Product 1", href: "/product-1" },
                { name: "Product 2", href: "/product-2" }
            ]
        },
        {
            name: "Customers", href: "/customers", icon: UserSquare,
            subItems: [
                { name: "Customer 1", href: "/customer-1" },
                { name: "Customer 2", href: "/customer-2" }
            ]
        },
        {
            name: "Income", href: "/income", icon: WalletMoney,
            subItems: [
                { name: "Income 1", href: "/income-1" },
                { name: "Income 2", href: "/income-2" }
            ]
        },
        {
            name: "Promote", href: "/promote", icon: DiscountShape,
            subItems: [
                { name: "Promote 1", href: "/promote-1" },
                { name: "Promote 2", href: "/promote-2" }
            ]
        },
        {
            name: "Help", href: "/help", icon: MessageQuestion,
            subItems: [
                { name: "Help 1", href: "/help-1" },
                { name: "Help 2", href: "/help-2" }
            ]
        },

    ]

    const handleItemClick = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    }


    return (
        <div className=''>
            <div className='h-screen bg-blue-950 px-4 py-7 flex flex-col'>
                <div className='flex items-center justify-start'>
                    <div className='px-1'>
                        <Setting color='white' size={30} />
                    </div>
                    <div className='px-1'>
                        <h1 className='text-white text-xl font-semibold font-sans hidden lg:block'>
                            Dashboard
                        </h1>
                    </div>
                </div>
                <div className='flex-1 pt-5 px-3 lg:px-0'>
                    <ul role="list" className="">
                        {navigation.map((item, index) => (
                            <li key={index} className='my-1.5'>
                                <NavLink to={item.href}>
                                    {({ isActive }) => (
                                        <span
                                            className={`flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium align-center cursor-pointer
                                                 ${isActive || activeIndex === index ? 'bg-blue-900/50 text-white' : 'text-gray-400 hover:text-white hover:bg-blue-900/50'}`}
                                            onClick={() => handleItemClick(index)}
                                            
                                        >
                                            <item.icon
                                                className={`w-5 h-5 ${isActive || activeIndex === index ? 'text-white' : 'text-gray-400 hover:text-white font-medium'}`}
                                                aria-hidden="true"
                                            />
                                            <span className='hidden lg:block'>{item.name}</span>
                                            {item.subItems.length > 0 && <span className="ml-auto flex items-center justify-center">{activeIndex === index ? <ArrowDown2 size={15} /> : <ArrowRight2 size={15} />}</span>}
                                        </span>
                                    )}
                                </NavLink>
                                {activeIndex === index && item.subItems.length > 0 && <SubMenu subItems={item.subItems} />}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=' bg-blue-900/50 rounded-md left-0 right-0 bottom-10'>
                    <div className='flex items-center space-x-4 px-2'>
                        <div className=''>
                            <img src={UserImage}
                                className='h-7 w-7 rounded-full' />
                        </div>
                        <div className='flex flex-col py-1'>
                            <p className='text-white font-sm font-sans'>Evano</p>
                            <p className='text-gray-400 text-xs font-medium font-sans'>Project Manager</p>
                        </div>
                        <div className=''>
                            <ArrowDown2 size={15} color='white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBar
