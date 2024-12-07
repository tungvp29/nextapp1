"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@/components/ui/card";
import Icon from "@/components/Icon/page";
import ImageWithFallback from "../ImageWithFallback/page";

// Enum cho các style hiển thị
enum DisplayStyle {
  Default = "Default",
  HideShow = "HideShow",
  ScrollVertical = "ScrollVerticle",
  ScrollHorizontal = "ScrollHorizontal",
  Swap = "Swap",
}

// Định nghĩa kiểu cho banner item
interface BannerItem {
  Advertise_ID: string;
  Advertise_Name: string;
  LinkTarget: string;
  LinkUrl: string;
  ImageUrl: string;
  ImageMobileUrl: string;
  PortalId: number;
}

// Định nghĩa props cho component
interface SliderBannerProps {
  bannerData: {
    DesktopStyle: DisplayStyle | null;
    DesktopLimit: number;
    DesktopSlideHeight: number;
    DesktopSlideSpeed: number;
    MobileStyle: DisplayStyle | null;
    MobileLimit: number;
    MobileSlideHeight: number;
    MobileSlideSpeed: number;
    ListBanner: BannerItem[];
  };
  isMobile?: boolean;
}

const SliderBanner: React.FC<SliderBannerProps> = ({
  bannerData,
  isMobile = false,
}) => {
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([]);
  const [style, setStyle] = useState<DisplayStyle | null>(null);
  const [slideHeight, setSlideHeight] = useState(0);

  useEffect(() => {
    // Chọn style và cấu hình phù hợp dựa trên môi trường mobile/desktop
    if (isMobile) {
      setStyle(bannerData?.MobileStyle);
      setSlideHeight(bannerData?.MobileSlideHeight);
      setBannerItems(
        bannerData?.ListBanner.map((item) => ({
          ...item,
          ImageUrl: item.ImageMobileUrl || item.ImageUrl,
        }))
      );
    } else {
      setStyle(bannerData?.DesktopStyle);
      setSlideHeight(bannerData?.DesktopSlideHeight);
      setBannerItems(bannerData?.ListBanner);
    }
  }, [bannerData, isMobile]);

  // Custom Previous Arrow
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute bottom-1 lg:bottom-4 right-1/2 z-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onClick}
      >
        <Icon
          icon="bxs:right-arrow"
          className="w-0 h-0 lg:w-8 lg:h-8 text-white hover:text-gray-300 transition-colors"
        />
      </div>
    );
  };

  // Custom Next Arrow
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute bottom-1 lg:bottom-4 left-1/2 z-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onClick}
      >
        <Icon
          icon="bxs:left-arrow"
          className="w-0 h-0 lg:w-8 lg:h-8 text-white hover:text-gray-300 transition-colors"
        />
      </div>
    );
  };

  // Cấu hình slider dựa trên style
  const getSliderSettings = () => {
    const baseSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    switch (style) {
      case DisplayStyle.ScrollVertical:
        return {
          ...baseSettings,
          vertical: true,
          verticalSwiping: true,
        };
      case DisplayStyle.ScrollHorizontal:
        return baseSettings;
      case DisplayStyle.Swap:
        return {
          ...baseSettings,
          fade: true,
        };
      case DisplayStyle.HideShow:
        return {
          ...baseSettings,
          fade: true,
        };
      default:
        return baseSettings;
    }
  };

  // Render slider
const renderSlider = () => {
  if (!bannerItems.length) return null;

  return (
      <Slider {...getSliderSettings()}>
        {bannerItems.map((item) => (
          <div
            key={item.Advertise_ID}
            className={`outline-none ${slideHeight > 0 ? `h-[${slideHeight}px]` : "h-auto"}`}
            onClick={() => {
              if (item.LinkUrl) {
                window.open(item.LinkUrl, item.LinkTarget || "_blank");
              }
            }}
          >
            <ImageWithFallback
              src={item.ImageUrl}
              alt={item.Advertise_Name}
              className="w-full h-full object-cover"
              fallbackSrc={`${process.env.CHECK_IMAGE}`}
            />
          </div>
        ))}
      </Slider>
  );
};

  return renderSlider();
};

export default SliderBanner;
