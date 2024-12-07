'use client'

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Icon from '@/components/Icon/page'
import Menu from '@/components/Menu/page'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher } from '@/components/Fetcher/page'
import ImageWithFallback from '@/components/ImageWithFallback/page'
import DateFormatter from '@/components/FormatDate/page'
import ShareSocialLinks from '@/components/ShareSocialLinks/page'
import MetaTags from '@/components/MetaTags'
import { useDispatch } from 'react-redux'
import { setMetaTags } from '@/components/Redux/reducers/metaTagsSlice'


interface NewsItemProp {
    Title: string,
    ImagePath: string,
    ToUrl?: string; // Thuộc tính tùy chọn
    Id?: string; // Thuộc tính tùy chọn
}
// const mockData = [
//     { title: 'Tin tức chung', active: true },
//     { title: 'Khoa học & công nghệ', active: false },
//     { title: 'Hợp tác & Phát triển', active: false },
//     { title: 'Chuyển đổi số với giáo dục', active: false },
//     { title: 'Pháp luật', active: false },
//     { title: 'VNU & Báo chí', active: false },
//     { title: 'Tin các đơn vị', active: false },
// ];
const socialIcons = [
    { Title: "Facebook", ImagePath: "/svgs/facebook.svg", ToUrl: "/" },
    { Title: "Facebook", ImagePath: "/svgs/zalo.svg", ToUrl: "/" },
];

const relatedNewsData = [
    { Title: 'Ngày hội tư vấn tuyển sinh - hướng nghiệp 2024: ĐHQGHN dự kiến tuyển sinh gần 18.000', ImagePath: '/images/chi-tiet/lienquan1.png', ToUrl: '/tin-tuc-chung' },
    { Title: 'Bài giảng đại chúng: Làm khoa học xuất sắc ở vùng hẻo lánh', ImagePath: '/images/chi-tiet/lienquan1.png', ToUrl: '/khoa-hoc-cong-nghe' },
    { Title: 'Nguyễn Khoa Bảo, cựu sinh viên ĐHQGHN: Cùng góp sức cho sự nghiệp trồng người', ImagePath: '/images/chi-tiet/lienquan1.png', ToUrl: '/hop-tac-phat-trien' },
    { Title: 'Di sản của Tổng bí thư Nguyễn Phú Trọng', ImagePath: '/images/chi-tiet/lienquan1.png', ToUrl: '/hop-tac-phat-trien' },
    { Title: 'Impacts of climate change on the flow in Hong-Thai Binh and Dong Nai river basins', ImagePath: '/images/chi-tiet/lienquan1.png', ToUrl: '/hop-tac-phat-trien' },

]
const eventData = [
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
    { Title: "Chương trình đào tạo đại học tại ĐHQGHN", ToUrl: '/ccdt' },
]
const notification = [
    { Title: "Quy định công tác quản lý và sử dụng học bổng tại ĐHQGHN", ToUrl: "/", isHot: true },
    { Title: "Mở linh đăng ký cuộc thi “ Tìm kiếm tài năng Tài chính - Ngân hàng “ năm 2024", ToUrl: "/", isHot: true },
    { Title: "Diễn đàn quốc tế Franconomics 2023 “ Năng lượng tái tạo kịch bản cho tương lai", ToUrl: "/", isHot: false },
    { Title: "Hướng dẫn quản lý sử dụng thẻ sinh viên đa năng tại Đại học Quốc gia Hà Nội", ToUrl: "/", isHot: false },
    { Title: "Diễn đàn quốc tế Franconomics 2023 “ Năng lượng tái tạo kịch bản cho tương lai", ToUrl: "/", isHot: false },
    { Title: "Hướng dẫn quản lý sử dụng thẻ sinh viên đa năng tại Đại học Quốc gia Hà Nội", ToUrl: "/", isHot: false },
    { Title: "Quy định công tác quản lý và sử dụng học bổng tại ĐHQGHN", ToUrl: "/", isHot: false },
    { Title: "Trung tâm khảo thí Đại học Quốc gia Hà Nội tuyển dụng", ToUrl: "/", isHot: false },

]
const imageBanner = [
    { Title: "ĐHQGHN trong nhóm 251-300 của Bảng xếp hạng đại học Times Higher Education 2021 Châu Á", ImagePath: '/images/chi-tiet/VNUTHEasia2021.png', ToUrl: '/khoa-hoc-cong-nghe' }

]
const breadcrumb = [
    { label: 'Tin tức - Sự kiện', link: '/tin-tuc-su-kien' },
    { label: 'Tin tức chung', link: '/tin-tuc-chung' },
    { label: 'Tin tuyển sinh', link: '' } // No link for the last item
];
const advertisement = [
    { Title: "a", ImagePath: '/images/chi-tiet/Frame2.png', ToUrl: '/khoa-hoc-cong-nghe' },
    { Title: "a", ImagePath: '/images/chi-tiet/Frame3.png', ToUrl: '/khoa-hoc-cong-nghe' },
    { Title: "a", ImagePath: '/images/chi-tiet/Frame1.png', ToUrl: '/khoa-hoc-cong-nghe' },
]
const RelatedNews: NewsItemProp[] = (relatedNewsData || []).map((item: NewsItemProp, index: number) => ({
    Title: item.Title,
    ImagePath: item.ImagePath,
    ToUrl: item.ToUrl,
    Id: item.Id,
}));
const eventNews: any[] = (eventData || []).map((item: any, index: number) => ({
    Title: item.Title,
    ToUrl: item.ToUrl,
}));
const notificationData: any[] = (notification || []).map((item: any, index: number) => ({
    Title: item.Title,
    ToUrl: item.ToUrl,
    isHot: item.isHot,
}));
const imageBanners: any[] = (imageBanner || []).map((item: any, index: number) => ({
    Title: item.Title,
    ImagePath: item.ImagePath,
    ToUrl: item.ToUrl,
}));
const advertisements: any[] = (advertisement || []).map((item: any, index: number) => ({
    Title: item.Title,
    ImagePath: item.ImagePath,
    ToUrl: item.ToUrl,
}));
const breadcrumbData: any[] = (breadcrumb || []).map((item: any, index: number) => ({
    Title: item.label,
    ToUrl: item.link,
}));



const Layout = () => {
    const [data, setData] = useState<any[]>([]);

    const [type, setType] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    // check pathname
    const pathName = usePathname();
    useEffect(() => {
        const fetchValidPath = async (path: string) => {
            const checkPathUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/CheckValidPath?portalId=0&path=${path}`;
            try {
                const fetchedDataPath = await fetcher(checkPathUrl);
                setType(fetchedDataPath.type);
                setData(fetchedDataPath);
            } catch (error) {
                setError("Failed to fetch data");
                console.error("Error fetching valid path:", error);
            } finally {
                setLoading(false);
            }
        };

        if (pathName) {
            setLoading(true);
            fetchValidPath(pathName);
        }
    }, [pathName]);  // Chạy lại mỗi khi pathname thay đổi

    // Log data or type when they change
    useEffect(() => {
        if (type) {
            console.log("Type updated:", type);
        }
    }, [type]);

    useEffect(() => {
        if (data.length > 0) {
            console.log("Data updated:", data);
        }
    }, [data]);

    if (loading) {
        return (
            <>
                <MaxWidthWrapper>
                    <div>Loading...</div>
                </MaxWidthWrapper>
            </>
        )
    }

    if (error) return <div>{error}</div>;
    console.log(type)
    console.log("haha", data)

    return (
        <>
            <div className="hidden lg:block">
                {/* <Menu /> */}
            </div>
            {type === "NEWS" && <DetailPage data={Array.isArray(data) ? data : [data]} />}
            {type === "CATE" && <CategoryPage />}
        </>
    )
}
const CategoryPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <div>list category</div>
            </MaxWidthWrapper>
        </>
    )
}
const DetailPage = ({ data }: any) => {
    console.log("Data in DetailPage:", data);
    const currentUrlOriginal = typeof window !== 'undefined' ? `${window.location.origin}` : '';
    const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';
    const dispatch = useDispatch();
    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
            data.forEach(item => {
                if (item && item.data) {
                    dispatch(setMetaTags({
                        url: currentUrl,
                        urlOriginal: currentUrlOriginal,
                        title: item.data.Title,
                        description: item.data.Summary,
                        imageUrl: item.data.ImagePath,
                        thumbnailUrl: item.data.ImagePath,
                    }));
                }
            });
        }
    }, [data, dispatch]);
    return (
        <>
            {/* check meta */}
            <MaxWidthWrapper className='px-6'>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 mb-20">
                    <div className="md:col-span-2 space-y-7">
                        <div className="mt-8 text-sm text-gray-700 flex items-center space-x-2 border-b-2 border-gray-300 pb-4">
                            <span className="text-orange-500">
                                <Icon icon="uit:calender" className="text-base" />
                            </span>
                            {
                                data.map((item: any) => (
                                    <span key={item.data.NewId} className="text-[#60585c80]">
                                        <DateFormatter date={item.data.PublishedDate} showDate={true} showDayOfWeek={true} />
                                    </span>
                                ))
                            }
                            <span className="text-[#60585c80]">|</span>
                            {breadcrumbData.map((item, index) => (
                                <span key={index} className={`text-[#60585c80] ${index !== breadcrumbData.length - 1 ? 'mr-2' : ''}`}>
                                    {item.ToUrl ? (
                                        <Link href={item.ToUrl} className={`${index === breadcrumbData.length - 1 ? 'text-[#038141] font-medium' : 'text-[#60585c80]'} font-medium`}>
                                            {item.Title} {'>>'}
                                        </Link>
                                    ) : (
                                        <span className={`${index === breadcrumbData.length - 1 ? 'text-[#038141] font-medium' : 'text-[#60585c80]'} font-medium`}>
                                            {item.Title}
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                        {
                            data.map((item: any) => (
                                <div key={item.data.NewId} className="w-full">
                                    <h1 className="text-[#038141] text-3xl leading-[1.5] font-bold">{item.data.Title}</h1>
                                    <h2 className="mt-10 leading-[1.5] text-base font-bold text-[#60585C]">{item.data.Summary}</h2>
                                    <div className="text-[#60585C] mt-28 mb-4 !w-full h-auto responsive-iframe" dangerouslySetInnerHTML={{ __html: item.data.Content }}></div>
                                    <div className='text-end mt-10 mb-20 font-bold text-[#60585C]'>
                                        <span >{item.data.SendName && item.data.SendName}</span>
                                    </div>
                                </div>
                            ))
                        }
                        {/* bình luận */}
                        <div className="flex items-center p-4 w-full">
                            <Image src="/svgs/user.svg" alt='avatar' width={60} height={60} />

                            <div className="relative flex-1 ml-4"> {/* Thêm ml-4 để có khoảng cách giữa avatar và input */}
                                <input
                                    type="text"
                                    placeholder="Viết bình luận cho bài viết này"
                                    className="w-full p-4 border-2 border-purple-300 rounded-lg text-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                                />

                                <Image
                                    src="/svgs/send.svg"
                                    alt="send icon"
                                    width={20}
                                    height={20}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                />
                            </div>

                        </div>
                    </div>

                    {/* sidebar */}
                    <div className="mt-20">
                        <span className="text-2xl text-[#60585C] font-semibold">Chia sẻ</span>
                        {/* mạng xã hội */}
                        <ShareSocialLinks iconsToShow="all" className="flex space-x-8 items-center w-full my-10" />

                        {/* some = ít nhất có 1 phần tử */}
                        {data.some((item: any) => item.data.RelativeNews?.length > 0) && (
                            <>
                                <span className="text-2xl text-[#60585C] font-semibold">Bài viết liên quan</span>
                                <div className="mt-10">
                                    {data.map((item: any) => {
                                        return item.data.RelativeNews.map((item: any) => (
                                            <Link
                                                href={`${item.FullUrl}`}
                                                title={item.Title}
                                                key={item.Title}
                                            >
                                                <div className="flex items-start mt-6">
                                                    <ImageWithFallback
                                                        src={item.ImagePath}
                                                        alt={item.Title}
                                                        className="w-36 aspect-[3/2] object-cover flex-shrink-0"
                                                        fallbackSrc={`${process.env.CHECK_IMAGE}`}
                                                    />
                                                    <div className="flex flex-col justify-between flex-grow ml-4">
                                                        <span className="flex gap-4 text-[#60585C] text-xs font-light items-center mb-3">
                                                            <Icon icon="uit:calender" className="text-orange-500 text-xs" />
                                                            <DateFormatter date={item.PublishedDate} showDate={true} showDayOfWeek={false} />
                                                        </span>
                                                        <h3 className="text-sm font-medium text-[#60585C] leading-[1.5]">{item.Title}</h3>
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    })}
                                </div>
                            </>
                        )
                        }
                        {/* Sự kiện */}
                        <div className="w-full mt-12">
                            <div className='mb-8'>
                                <span className="text-2xl text-[#60585C] font-semibold ">Sự kiện</span>
                            </div>

                            <div>
                                {
                                    eventNews.map((item, index) => (
                                        <Link
                                            href={item.ToUrl}
                                            key={index}
                                        >
                                            <div className="flex items-center gap-4 text-[#60585C] font-normal mb-3 bg-[#FAF9FF] p-3">
                                                <Icon icon="mynaui:star" className="text-orange-500 text-xs" />
                                                {item.Title}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Thông báo */}
                        <div className="w-full mt-12 bg-[#F8F8F8]">
                            <div className="mb-1 p-4">
                                <span className="text-2xl text-[#60585C] font-semibold">Thông báo</span>
                            </div>

                            <div>
                                {notificationData.map((item, index) => (
                                    <Link href={item.ToUrl} key={index}>
                                        <div className="flex items-center gap-2 text-[#60585C] font-normal mb-3 p-3">
                                            <div className="flex items-center justify-center w-2 h-2">
                                                <Icon
                                                    icon="material-symbols:circle-outline"
                                                    fontSize="1rem"
                                                    className="text-orange-500 font-bold"
                                                />
                                            </div>
                                            <span className="leading-snug">{item.Title}</span>
                                            {item.isHot && (
                                                <div className="relative flex items-center justify-center w-10 h-10 ml-2 shrink-0">
                                                    <Image
                                                        src="/images/chi-tiet/isHot.png"
                                                        alt={item.Title}
                                                        width={32}
                                                        height={32}
                                                        className="absolute"
                                                    />
                                                    <span className="absolute text-white font-bold text-[8px]">mới</span>
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Hình ảnh */}
                        <div className="w-full mt-12">
                            <div className='mb-8'>
                                <span className="text-2xl text-[#60585C] font-semibold ">Hình ảnh</span>
                            </div>

                            <div>
                                {
                                    imageBanners.map((item, index) => (
                                        <Link
                                            href={item.ToUrl}
                                            key={index}
                                        >
                                            <img src={item.ImagePath} alt={item.Title} className="w-full h-auto object-cover" />
                                            <div className="flex items-center gap-4 text-[#60585C] text-base font-medium mb-3 p-4 bg-[#F8F8F8]">
                                                {item.Title}
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                        {/* quảng cáo banner trường  và thứ khác ..*/}
                        <div className="w-full mt-12">
                            <div>
                                {
                                    advertisements.map((item, index) => (
                                        <Link
                                            href={item.ToUrl}
                                            key={index}
                                        >
                                            <div className="mb-16">
                                                <img src={item.ImagePath} alt={item.Title} className="w-full h-auto object-cover flex-shrink" />
                                            </div>

                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
};

export default Layout
