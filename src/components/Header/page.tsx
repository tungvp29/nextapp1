"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "../MaxWidthWrapper";
import LanguageSelector from "../LanguageSelector/page";
import Icon from "@/components/Icon/page";
import ImageWithFallback from "../ImageWithFallback/page";
import { fetcher } from "../Fetcher/page";
import { Skeleton } from "../ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MenuItemType {
  Name: string;
  Link: string;
}

const Header = () => {
  const router = useRouter();

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

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [listUrlHeaderTop, setListUrlHeaderTop] = useState<MenuItemType[]>([
    { Name: "Thư viện số", Link: "/" },
    { Name: "Văn bản", Link: "/" },
    { Name: "Email", Link: "/" },
    { Name: "Liên hệ", Link: "/" },
    { Name: "Sitemap", Link: "/" },
  ]);

  const apiUrl = `${process.env.NEXT_LOCAL_BASE_URL}FE/getMenu/0/top`;
  const apiUrlMobile = `${process.env.NEXT_LOCAL_BASE_URL}FE/getMenu/0/mobile`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (isLargeScreen) {
          const fetchedDataMenu = await fetcher(apiUrl);
          setListUrlHeaderTop(fetchedDataMenu);
        } else {
          const fetchedDataMenu = await fetcher(apiUrlMobile);
          setListUrlHeaderTop(fetchedDataMenu);
        }
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isLargeScreen, apiUrl, apiUrlMobile]);

  if (loading) {
    return (
      <div className="w-full">
        <Skeleton className="h-[180px] sm:h-[240px] md:h-[360px] w-full lg:h-[600px]" />
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="sticky top-0 z-50 bg-white">
      <MaxWidthWrapper className="px-6">
        <header className="flex w-full justify-between items-center py-5">
          <div
            className="w-[93px] h-[30px] lg:w-[185px] lg:h-[60px] cursor-pointer"
            onClick={() => router.push("/")}
          >
            <ImageWithFallback
              src="/images/logo/VNU_logo_green.svg"
              alt="VNU Logo"
              className="w-full h-full"
              fallbackSrc={`${process.env.CHECK_IMAGE}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            {listUrlHeaderTop.map((item, index) => (
              <a
                key={index}
                onClick={() => router.push(item.Link)}
                className="hidden lg:block text-[#5f585c80] hover:text-green-600"
              >
                {item.Name}
              </a>
            ))}
            <LanguageSelector className="w-[85px]" />
            <button className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
              <Icon icon="iconamoon:search-thin" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
                <Icon icon="lucide:menu" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="translate-y-2">
  {listUrlHeaderTop.map((item, index: number)=>
  <DropdownMenuItem key={index} onClick={() => router.push(item.Link)}>{item.Name}</DropdownMenuItem>)}
</DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
