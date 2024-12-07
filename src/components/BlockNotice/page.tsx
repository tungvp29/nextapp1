import React from "react";
import { useRouter } from 'next/navigation'
import Icon from "@/components/Icon/page";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface NewsItem {
  Title: string; // Chọn trường bạn muốn hiển thị
  FullUrl: string;
}

interface NoticeItem {
  ListNews?: NewsItem[];
}

interface NoticeData {
  Data?: NoticeItem[];
}

interface BlockNoticeProps {
  bgImage: string;
  noticeList?: NoticeData;
}

const BlockNotice: React.FC<BlockNoticeProps> = ({ bgImage, noticeList }) => {
  const router = useRouter();

  // Flatten the news items to handle nested structure
  const flattenedNews = React.useMemo(() => {
    return noticeList?.Data?.flatMap(
      (item: NoticeItem) => item.ListNews || []
    ) || [];
  }, [noticeList]);

  // Don't render if no news items
  if (!flattenedNews.length) {
    return null;
  }

  return (
    <div className="relative w-full h-[400px]">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(91deg, #576E2A 36.7%, rgba(87, 110, 42, 0.70) 51.47%, rgba(87, 110, 42, 0.20) 79.12%)",
          }}
        >
          <div className="absolute inset-0">
            <MaxWidthWrapper className="h-full">
              <div className="flex gap-x-14 items-center py-10 h-full">
                <div className="hidden lg:block text-white w-[384px]">
                  <h3 className="text-3xl font-medium leading-6 mb-14">
                    THÔNG BÁO
                  </h3>
                  <p className="text-sm leading-6 mb-20 line-clamp-3">
                    Văn bản thông báo luôn được cập nhật để gửi thông tin đến cơ
                    quan, tổ chức, cán bộ nhân viên, sinh viên và học sinh..
                  </p>
                  <button className="flex gap-x-2 items-center border-[1px] border-white text-white hover:border-[#cab03e] hover:text-[#cab03e] py-1 rounded-md px-2">
                    Tìm hiểu thêm <Icon icon="ph:arrow-right-light" />
                  </button>
                </div>
                <div className="text-[#60585C] w-full h-full flex flex-col justify-around bg-white rounded-lg px-8 py-4">
                  <h4 className="text-[20px] font-medium leading-6">
                    Thông báo mới
                  </h4>
                  <div className="w-full flex flex-col gap-y-[5px]">
                    {flattenedNews.slice(0, 6).map((item: NewsItem, index: number) => (
                      <div
                        key={index}
                        className="flex justify-start items-start text-sm leading-5 line-clamp-2"
                        onClick={() => router.push(item.FullUrl)}
                      >
                        <Icon
                          icon="mdi:circle"
                          color="#ED6B02"
                          className="w-[6px] mr-1 flex-shrink-0"
                        />
                        <span className="line-clamp-2">{item.Title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockNotice;