'use client'
import useSWR from 'swr';
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '../Fetcher/page';
import { useEffect } from 'react';
import { useState } from 'react';
import './footer.css';




const Footer = () => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const apiUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/getSiteInfo/0`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const fetchedData = await fetcher(apiUrl);
                setData(fetchedData);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [apiUrl]);
    return (
        <footer className="bg-[#00803D] pt-8 flex justify-center mx-auto w-full max-w-screen-2xl px-2.5 md:px-20">
            <div className="container mx-auto px-4">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Image
                        src="/images/logo/VNU_logo_black.svg"
                        alt="VNU Logo"
                        width={200}
                        height={80}
                        className="h-auto w-100 sm:w-200"
                    />
                </div>
                {/* Content */}
                <div className='footer-content text-sm md:text-base' dangerouslySetInnerHTML={{ __html: data?.Footer }}></div>
            </div>
        </footer>
    )
}

export default Footer;
