"use client";
import React, { useState, useEffect } from "react";
import NewsItem from "../NewsItem/page";

const BlockInvestment = ({ data }: any) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Xác định kích thước màn hình khi client render
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Gọi ngay khi component được mount
    window.addEventListener("resize", handleResize);

    // Dọn dẹp event listener khi unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Flatten the news items to handle nested structure
  const flattenedNews = React.useMemo(() => {
    return data?.Data?.flatMap((item: any) => item.ListNews || []) || [];
  }, [data]);

  // Don't render if no news items
  if (!flattenedNews.length) {
    return null;
  }
  
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-14">
      <div className="w-full max-w-[878px] text-center text-[#60585C] flex flex-col gap-y-5">
        <h3 className="text-2xl lg:text-3xl font-medium leading-6 uppercase">
          HỢP TÁC VÀ ĐẦU TƯ
        </h3>
        <span className="hidden lg:block text-base font-normal leading-6">
          Hợp tác và Đầu tư trong giáo dục tạo sự đột phá trong toàn hệ thống
        </span>
      </div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          {isLargeScreen ? (
            <NewsItem
              key={0}
              title={flattenedNews[0].Title}
              image={flattenedNews[0].ImagePath}
              path={flattenedNews[0].FullUrl}
              description={flattenedNews[0].Summary}
              isPrimary="Hợp tác & Đầu tư"
            />
          ) : (
            <NewsItem
              key={0}
              title={flattenedNews[0].Title}
              image={flattenedNews[0].ImagePath}
              path={flattenedNews[0].FullUrl}
              titleStyle="text-xl text-[#60585C] lg:text-base leading-6 line-clamp-3 min-h-[68px]"
            />
          )}
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 justify-between">
          {flattenedNews.slice(1, 3).map((item: any, index: number) => (
            <NewsItem
              key={index + 1}
              title={item.Title}
              path={item.FullUrl}
              image={item.ImagePath}
              titleStyle="text-xl text-[#60585C] lg:text-base leading-6 line-clamp-3 min-h-[68px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockInvestment;
