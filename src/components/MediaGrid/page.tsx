"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import ImageWithFallback from "../ImageWithFallback/page";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface NewsItem {
  ImagePath: string;
  Title: string;
  FullUrl: string;
}

interface MediaGridProps {
  data?: {
    Data?: {
      ListNews?: NewsItem[];
    }[];
  };
}

const MediaGrid: React.FC<MediaGridProps> = ({ data }) => {
  const router = useRouter();

  // Flatten the news items to handle nested structure
  const flattenedNews = React.useMemo(() => {
    return data?.Data?.flatMap(
      (item) => item.ListNews || []
    ) || [];
  }, [data]);

  // Don't render if no news items
  if (!flattenedNews.length) {
    return null;
  }

  return (
    <TooltipProvider>
      <div className="grid grid-cols-12 gap-4 mx-auto min-h-[300px]">
        {flattenedNews.slice(0, 6).map((item: NewsItem, index: number) =>
          index === 0 ? (
            <div
              key={index}
              className={`col-span-12 ${index === 0 ? "lg:col-span-9" : "lg:col-span-12"} lg:row-span-8 lg:min-h-[300px]`}
              onClick={() => router.push(item.FullUrl)}
            >
              <Tooltip>
                <TooltipTrigger className="!h-full">
                  <ImageWithFallback
                    src={item.ImagePath}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                    fallbackSrc={`${process.env.CHECK_IMAGE}`}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="max-w-[300px] truncate">{item.Title}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ) : (
            <div
              key={index}
              className={`hidden lg:block col-span-12 lg:col-span-3 lg:row-span-4 ${
                index === 5 ? "lg:col-span-6" : ""
              } min-h-[250px]`}
              onClick={() => router.push(item.FullUrl)}
            >
              <Tooltip>
                <TooltipTrigger className="!h-full">
                  <ImageWithFallback
                    src={item.ImagePath}
                    alt={item.Title}
                    className="w-full h-full object-cover"
                    fallbackSrc={`${process.env.CHECK_IMAGE}`}
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p className="max-w-[300px] truncate">{item.Title}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          )
        )}
      </div>
    </TooltipProvider>
  );
};

export default MediaGrid;