"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

const socialIcons = [
    { ImagePath: "/svgs/facebook.svg", name: 'Facebook' },
    { ImagePath: "/svgs/zalo.svg", name: 'Zalo' },
];

interface ShareLinksProps {
    iconsToShow: string; // icon muốn hiển thị
    className?: string;
}

const ShareSocialLinks: React.FC<ShareLinksProps> = ({ iconsToShow, className }) => {
    // Lọc ra các icon cần hiển thị theo prop `iconsToShow`
    const filteredIcons = socialIcons.filter(icon =>
        iconsToShow === 'all' || icon.name.toLowerCase() === iconsToShow.toLowerCase()
    );

    const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://sp.zalo.me/plugins/sdk.js?v=2";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={className}>
            {filteredIcons.map((icon, index) => {
                if (icon.name === 'Zalo') {
                    return (
                        <div key={index} className="zalo-share-button"
                            data-href={currentUrl} // URL muốn chia sẻ
                            data-oaid="579745863508352884" // OAID của bạn trên Zalo
                            data-layout="3" // Tùy chọn layout của Zalo
                            data-color="blue" // Tùy chọn màu sắc của nút
                            data-customize="true">
                            <a href="javascript:;" title="Share Zalo">
                                <Image
                                    src={icon.ImagePath}
                                    alt={`icon-${index}`}
                                    width={35}
                                    height={35}
                                />
                            </a>
                        </div>
                    );
                } else {
                    return (
                        <div key={index} onClick={() => handleShare(icon.name)} className="cursor-pointer">
                            <Image
                                src={icon.ImagePath}
                                alt={`icon-${index}`}
                                width={35}
                                height={35}
                            />
                        </div>
                    );
                }
            })}
        </div>
    );
};

// Hàm chia sẻ lên Facebook
const handleShare = (platform: string) => {
    const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : '';
    let shareUrl = '';
    if (platform === 'Facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
};

export default ShareSocialLinks;
