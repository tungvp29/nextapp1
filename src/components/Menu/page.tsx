"use client";
import React, { useEffect, useState } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Icon from '@/components/Icon/page'
import { fetcher } from '../Fetcher/page';

interface MenuProps {
  menuData: any[];
  defaultActiveTitle: string;
}

const Menu: React.FC<MenuProps> = ({ menuData, defaultActiveTitle }) => {
    const [data, setData] = useState<{ Name: string }[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const apiUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/getMenu/0/menu`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const fetchedData = await fetcher(apiUrl);
                setData(fetchedData);
                setActiveTitle(fetchedData[0].Name);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]); // Chạy lại khi apiUrl thay đổi

    const [activeTitle, setActiveTitle] = useState<string>("");

    const handleItemClick = (Name: string) => {
        setActiveTitle(Name);
    };
    const handleHomeClick = () => {
        setActiveTitle("Home");
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className="bg-[#F8F8F8]">
            <MaxWidthWrapper className=''>
                <div className="">
                    <nav className="flex justify-between items-center space-x-4">
                        <div className="flex space-x-4">
                            <button
                                className="flex items-center pt-2 pr-3 text-sm text-[#60585c80] hover:text-gray-700 focus:outline-none"
                                onClick={handleHomeClick}>
                                <span
                                    className={`inline-block pb-2 ${activeTitle === "Home"
                                            ? 'text-[#038141] font-medium border-b-[3.5px] border-orange-500'
                                            : 'text-[#60585c80]'
                                        }`}>
                                    <Icon icon="tabler:home-2" />
                                </span>
                            </button>

                            {data.map((item, index) => (
                                <button
                                    key={index}
                                    className="flex items-center pt-2 px-3 text-sm text-[#60585c80] hover:text-gray-700 focus:outline-none"
                                    onClick={() => handleItemClick(item.Name)}
                                >
                                    <span
                                        className={`inline-block pb-2 ${item.Name === activeTitle
                                                ? 'text-[#038141] font-medium border-b-[3.5px] border-orange-500'
                                                : 'text-[#60585c80]'
                                            }`}
                                    >
                                        {item.Name}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <Icon icon="iconamoon:search-thin" />
                        </button>
                    </nav>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default Menu
