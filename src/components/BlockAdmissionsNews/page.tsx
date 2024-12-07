import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsItem from "../NewsItem/page";
import Icon from "@/components/Icon/page";

// Define types for better type safety
interface NewsItemType {
  Title: string;
  ImagePath: string;
  FullUrl: string;
}

interface AdmissionsNewsItem {
  ListNews: NewsItemType[];
}

interface BlockAdmissionsNewsProps {
  admissionsNewsList?: {
    Data?: AdmissionsNewsItem[];
  };
}

const BlockAdmissionsNews: React.FC<BlockAdmissionsNewsProps> = ({ 
  admissionsNewsList 
}) => {
  // Flatten the news items to handle nested structure
  const flattenedNews = React.useMemo(() => {
    return admissionsNewsList?.Data?.flatMap(
      (item) => item.ListNews || []
    ) || [];
  }, [admissionsNewsList]);

  // Don't render if no news items
  if (!flattenedNews.length) {
    return null;
  }

  return (
    <div className="w-full flex justify-center items-center flex-col gap-y-14">
      <div className="w-full max-w-[878px] text-center text-[#60585C] flex flex-col gap-y-5">
        <h3 className="text-2xl lg:text-3xl font-medium leading-6 uppercase">
          Tin tuyển sinh
        </h3>
        <span className="hidden lg:block text-base font-normal leading-6">
          Danh sách, thông tin tuyển sinh mới nhất của trường Đại Học Quốc Gia
          Hà Nội
        </span>
      </div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          skipSnaps: true,
        }}
        className="w-full max-w-[1200px]"
      >
        <CarouselContent>
          {flattenedNews.map((news, index) => (
            <CarouselItem
              key={`${news.FullUrl}-${index}`}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <NewsItem
                title={news.Title}
                image={news.ImagePath}
                path={news.FullUrl}
                titleStyle="text-[#60585C] text-base leading-6 line-clamp-2 min-h-[52px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex left-[-50px] w-12 h-12 bg-transparent border-none hover:bg-[#60585C]/10">
          <Icon icon="ep:arrow-left"/>
        </CarouselPrevious>
        <CarouselNext className="hidden lg:flex right-[-50px] w-12 h-12 bg-transparent border-none hover:bg-[#60585C]/10">
          <Icon icon="ep:arrow-right"/>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default BlockAdmissionsNews;