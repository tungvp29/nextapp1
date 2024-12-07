import { useEffect } from 'react';
import { fetcher } from '../Fetcher/page';
import { useState } from 'react';
import ImfomationBlock from './ImfomationBlock';

interface ImfomationBlockProps {
    imageSrc: string;
    number: string;
    title: string;
    titleEnglish: string;
}

const imfomationBlock = [
    {
        imageSrc: "/svgs/SVG_DON_VI.svg",
        number: "37",
        title: "Đơn vị",
        titleEnglish: "VNU member",
    },
    {
        imageSrc: "/svgs/SVG_PHONG_THI_NGHIEM.svg",
        number: "213",
        title: "Phòng thi nghiệm",
        titleEnglish: "Laboratory",
    },
    {
        imageSrc: "/svgs/SVG_NHOM_NGHIEN_CUU.svg",
        number: "36",
        title: "Nhóm nghiên cứu mạnh",
        titleEnglish: "Strong research groups",
    },
    {
        imageSrc: "/svgs/SVG_SAN_PHAM.svg",
        number: "1803",
        title: "Sản phẩm KH&CN ‘2023”",
        titleEnglish: "S&T products",
    },
    {
        imageSrc: "/svgs/SVG_CAN_BO.svg",
        number: "2721",
        title: "Cán bộ khoa học",
        titleEnglish: "Staff",
    },
    {
        imageSrc: "/svgs/SVG_GIAO_SU.svg",
        number: "592",
        title: "Giáo Sư, Phó Giáo Sư",
        titleEnglish: "Laboratories",
    },
    {
        imageSrc: "/svgs/SVG_CHUONG_TRINH.svg",
        number: "475",
        title: "Chương trình đào tạo",
        titleEnglish: "Education program ",
    },
    {
        imageSrc: "/svgs/SVG_GIAI_THUONG.svg",
        number: "55",
        title: "Giải thưởng",
        titleEnglish: "Awards",
    },
    {
        imageSrc: "/svgs/SVG_HUY_TRUONG.svg",
        number: "301",
        title: "Huy chương Olympic Quốc tế & Khu vực",
        titleEnglish: "International & Regional Olympiad Medals",
    }
];
var imfomationBlockAPIGet : ImfomationBlockProps[] = [];

const NumbersImfomation = () => {
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const apiUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/getweblink/0/3`;
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
            // Tách chuỗi item.Name thành tiếng Việt và tiếng Anh
            var [titleVN, titleEN] = item.Name.split('|').map((part: string) => part.trim());
            imfomationBlockAPIGet.push({
                title: titleVN || '',       // Nếu không có phần tiếng Việt, gán giá trị rỗng
                number: item.Description,
                titleEnglish: titleEN || '', // Nếu không có phần tiếng Anh, gán giá trị rỗng
                imageSrc: item.Thumbnail
            });
        });
    }
    return (
        <div className="flex flex-col items-center justify-center text-[#60585C] bg-bgNumberImfomation bg-no-repeat bg-[length:1400px_600px]">
            <h3 className="text-xl text-center lg:text-3xl font-medium leading-6 uppercase text-[#60585C] pb-3 lg:pb-6 bg-transparent">
                ĐẠI HỌC QUỐC GIA HÀ NỘI QUA NHỮNG CON SỐ
            </h3>
            <p className="pb-3 sm:pb-6 lg:pb-9 text-center bg-transparent hidden sm:block">Những con số nổi bật của Đại Học Quốc Gia Hà Nội</p>
            <div className="w-full h-max flex justify-center bg-transparent">
                <div className="numbers-imfomation grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-6 lg:gap-12 bg-transparent overflow-x-auto lg:overflow-x-visible">
                    {(imfomationBlockAPIGet?.length > 0 ? imfomationBlockAPIGet : imfomationBlock).map((item, index) => (
                        <ImfomationBlock
                            key={index}
                            imageSrc={item.imageSrc}
                            number={item.number}
                            title={item.title}
                            titleEnglish={item.titleEnglish}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumbersImfomation;