import { useEffect } from 'react';
import { fetcher } from '../Fetcher/page';
import { useState } from 'react';
import ImfomationBlock from './MembersAndAffilicatedBlock';

interface ImfomationBlockProps {
    imageSrc: string;
    title: string;
    url: string;
}

const imfomationBlock = [
    {
        imageSrc: "/svgs/SVG_TRUONG_DHTV.svg",
        title: "Trường Đại Học thành viên",
        url: "/"
    },
    {
        imageSrc: "/svgs/SVG_TRUONG_KHOA_TT.svg",
        title: "Trường, Khoa trực thuộc",
        url: "/"
    },
    {
        imageSrc: "/svgs/SVG_VIEN_NGHIEN_CUU.svg",
        title: "Viện nghiên cứu",
        url: "/"
    },
    {
        imageSrc: "/svgs/SVG_TRUNG_TAM_DT.svg",
        title: "Trung tâm ĐT các môn chung",
        url: "/"
    },
    {
        imageSrc: "/svgs/SVG_DON_VI_PV_DV.svg",
        title: "Đơn vị phục vụ, dịch vụ",
        url: "/"
    },
    {
        imageSrc: "/svgs/SVG_DON_VI_KHAC.svg",
        title: "Đơn vị khác",
        url: "/"
    }
];

var imfomationBlockAPIGet : ImfomationBlockProps[] = [];

const MembersAndAffilicated = () => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const apiUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/getweblink/0/4`;
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
    if (data.length > 0) {
        // remove all items in imfomationBlockAPIGet
        imfomationBlockAPIGet = [];
        data.forEach((item: any) => {
            imfomationBlockAPIGet.push({
                title: item.Name,
                imageSrc: item.Thumbnail,
                url: item.Link == "javascript:;" ? "/" : item.Link
            });
        });
    }
    return (
        <div className="flex flex-col items-center justify-center text-[#60585C]">
            <h3 className="text-xl text-center lg:text-3xl font-medium leading-6 uppercase text-[#60585C] pb-6 lg:pb-6 bg-transparent">
                CÁC ĐƠN VỊ THÀNH VIÊN & TRỰC THUỘC
            </h3>
            <p className="pb-3 sm:pb-6 lg:pb-9 text-center bg-transparent hidden sm:block">Các đơn vị chi nhánh trực thuộc Đại học Quốc Gia Hà Nội</p>
            <div className="w-full h-max flex justify-center bg-transparent">
                <div className="numbers-imfomation grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 bg-transparent w-full">
                    {(imfomationBlockAPIGet?.length > 0 ? imfomationBlockAPIGet : imfomationBlock).map((item, index) => (
                        <ImfomationBlock
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            url={item.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MembersAndAffilicated;