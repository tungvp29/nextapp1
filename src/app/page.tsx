"use client";

import BlockAdmissionsNews from "@/components/BlockAdmissionsNews/page";
import BlockGallery from "@/components/BlockGallery/page";
import BlockInvestment from "@/components/BlockInvestment/page";
import BlockLink from "@/components/BlockLink/page";
import BlockNewsEvent from "@/components/BlockNewsEvent/page";
import CEOGreeting from "@/components/CEOGreeting/page";
import BlockNotice from "@/components/BlockNotice/page";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Menu from "@/components/Menu/page";
import SliderBanner from "@/components/SliderBanner/page";
import { VscSettings } from "react-icons/vsc";
import NumbersImfomation from "@/components/NumbersImfomation/page";
import MembersAndAffilicated from "@/components/MembersAndAffilicated/page";
import { useEffect, useState } from "react";
import { fetcher } from "@/components/Fetcher/page";
import { Skeleton } from "@/components/ui/skeleton";
import WhyChoose from "@/components/WhyChoose/page";

const bgImage = "/images/home/notice/background.png";

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  const [bannerData, setBannerData] = useState<any>({});
  const [loadingBanner, setLoadingBanner] = useState<boolean>(false);
  const apiUrlBanner = `${process.env.NEXT_LOCAL_BASE_URL}FE/getBannerByPosition/0/HomePage_1`;

  const [link, setLink] = useState<any[]>([]);
  const [loadingLink, setLoadingLink] = useState<boolean>(false);
  const apiUrlLink = `${process.env.NEXT_LOCAL_BASE_URL}FE/getweblink/0/2`;

  const [newsEvent, setNewsEvent] = useState<any>({});
  const [loadingNewsEvent, setLoadingNewsEvent] = useState<boolean>(false);
  const apiUrlNewsEvent = `${process.env.NEXT_LOCAL_BASE_URL}FE/getHomeBlockConfig/0/homeBlock_1/4`;

  const [admissionsNews, setAdmissionsNews] = useState<any>({});
  const [loadingAdmissionsNews, setLoadingAdmissionsNews] = useState<boolean>(false);
  const apiUrlAdmissionsNews = `${process.env.NEXT_LOCAL_BASE_URL}FE/getHomeBlockConfig/0/homeBlock_2/6`;

  const [noticeList, setNoticeList] = useState<any>({});
  const [loadingNotice, setLoadingNotice] = useState<boolean>(false);
  const apiUrlNotice = `${process.env.NEXT_LOCAL_BASE_URL}FE/getHomeBlockConfig/0/homeBlock_3/6`;

  const [galleryList, setGalleryList] = useState<any>({});
  const [loadingGallery, setLoadingGallery] = useState<boolean>(false);
  const apiUrlGallery = `${process.env.NEXT_LOCAL_BASE_URL}FE/getHomeBlockConfig/0/homeBlock_4/6`;

  const [investmentList, setInvestment] = useState<any>({});
  const [loadingInvestment, setLoadingInvestment] = useState<boolean>(false);
  const apiUrlInvestment = `${process.env.NEXT_LOCAL_BASE_URL}FE/getHomeBlockConfig/0/homeBlock_5/3`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingBanner(true);
        const fetchedDataBanner = await fetcher(apiUrlBanner);
        setBannerData(fetchedDataBanner);

        setLoadingLink(true);
        const fetchedDataLink = await fetcher(apiUrlLink);
        setLink(fetchedDataLink);

        setLoadingAdmissionsNews(true);
        const fetchedDataAdmissionsNews = await fetcher(apiUrlAdmissionsNews);
        setAdmissionsNews(fetchedDataAdmissionsNews);

        setLoadingAdmissionsNews(true);
        const fetchedDataNewsEvent = await fetcher(apiUrlNewsEvent);
        setNewsEvent(fetchedDataNewsEvent);

        setLoadingNotice(true);
        const fetchedDataNotice = await fetcher(apiUrlNotice);
        setNoticeList(fetchedDataNotice);

        setLoadingGallery(true);
        const fetchedDataGallery = await fetcher(apiUrlGallery);
        setGalleryList(fetchedDataGallery);

        setLoadingInvestment(true);
        const fetchedDataInvestment = await fetcher(apiUrlInvestment);
        setInvestment(fetchedDataInvestment);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoadingBanner(false);
        setLoadingLink(false);
        setLoadingNewsEvent(false);
        setLoadingAdmissionsNews(false);
        setLoadingNotice(false);
        setLoadingGallery(false);
        setLoadingInvestment(false);
      }
    };

    fetchData();
  }, [apiUrlBanner, apiUrlNewsEvent, apiUrlAdmissionsNews, apiUrlLink, apiUrlNotice, apiUrlGallery, apiUrlInvestment]);

  if (loadingBanner || loadingNewsEvent || loadingAdmissionsNews || loadingLink || loadingNotice || loadingGallery || loadingInvestment) {
    return (
      <div className="w-full">
         {/* Banner */}
        <Skeleton className="h-[180px] sm:h-[240px] md:h-[360px] w-full lg:h-[600px]" />
        {/* News Event */}

      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="w-full hidden lg:block">
        {/* <Menu /> */}
      </div>
      <SliderBanner bannerData={bannerData} isMobile={false} />
      <BlockLink linkList={link} />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-20 my-20 select-none">
          <CEOGreeting />
          <BlockNewsEvent newsList={newsEvent} />
          <BlockAdmissionsNews admissionsNewsList={admissionsNews} />
        </div>
      </MaxWidthWrapper>
      <BlockNotice bgImage={bgImage} noticeList={noticeList} />
      <MaxWidthWrapper>
        <div className="flex flex-col gap-y-20 my-20 select-none">
          <BlockGallery data={galleryList} />
          <NumbersImfomation />
          <WhyChoose/>
          <BlockInvestment data={investmentList} />
          <MembersAndAffilicated />
        </div>
      </MaxWidthWrapper>
    </>
  );
}
