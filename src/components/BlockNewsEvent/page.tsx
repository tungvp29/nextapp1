import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NewsItem from "../NewsItem/page";

const BlockNewsEvent = ({ newsList }: any) => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-16">
      <div className="w-full max-w-[878px] text-center text-[#60585C] flex flex-col gap-y-5">
        <h3 className="text-2xl lg:text-3xl font-medium leading-6 uppercase">
          Tin tức - sự kiện
        </h3>
        <span className="hidden lg:block text-base font-normal leading-6">
          Tìm hiểu cách nền giáo dục mang tính chuyển đổi và nghiên cứu đa ngành
          của chúng tôi đã đào tạo nên những nhà lãnh đạo toàn cầu hiệu quả, tác
          động đến xã hội và thay đổi cuộc sống theo hướng tốt đẹp hơn.
        </span>
        <div className="flex gap-x-6 justify-center items-center">
          <Button className="border-2 bg-[#038141] text-white group">
            <Image
              src="/svgs/paper-plane.svg"
              alt="paper-plane"
              width={20}
              height={20}
              className="filter brightness-0 invert"
            />
            Nổi bật
          </Button>
          <Button className="bg-white text-black border-2 hover:bg-[#038141] hover:text-white group">
            <Image
              src="/svgs/global-news.svg"
              alt="global-news"
              width={20}
              height={20}
              className="group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
            Tin tức
          </Button>
        </div>
      </div>
      {newsList?.Data?.map((item: any, index: any) => (
        <div
          key={index}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-[60px]"
        >
          {item?.ListNews?.map((news: any, i: number) => (
            <div key={i}>
              <NewsItem
                title={news.Title}
                image={news.ImagePath}
                description={news.Summary}
                path={news.FullUrl}
                isPrimary="Tin tức chung"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlockNewsEvent;
