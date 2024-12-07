import React, { useState } from "react";

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    className?: string;
    fallbackSrc: string;  // URL của ảnh mặc định
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className, fallbackSrc }) => {
    const [imageSrc, setImageSrc] = useState(src); // Sử dụng src mặc định

    // Hàm xử lý khi ảnh bị lỗi
    const handleError = () => {
        setImageSrc(fallbackSrc);  // Khi có lỗi, thay src thành ảnh mặc định
    };

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            onError={handleError} // Xử lý khi ảnh không thể tải
        />
    );
};

export default ImageWithFallback;
