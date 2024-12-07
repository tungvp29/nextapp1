import Image from 'next/image';
import ImageWithFallback from '../ImageWithFallback/page';

interface ImfomationBlockProps {
    imageSrc: string;
    number: string;
    title: string;
    titleEnglish: string;
}

const ImfomationBlock = ({ imageSrc, number, title, titleEnglish }: ImfomationBlockProps) => {
    // Format the number with a dot as a thousand separator
    const formattedNumber = new Intl.NumberFormat('vi-VI').format(Number(number));

    return (
        <div className="imfomation-content p-4">
            <div className="imfomation-block flex flex-col md:flex-row items-center">
                <div className='imfomation-icon w-16 h-16 md:w-20 md:h-20 flex-shrink-0'>
                    <ImageWithFallback
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-contain"
                        fallbackSrc={`${process.env.CHECK_IMAGE}`}
                        />
                </div>
                <div className="imfomation-block-text mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <h3 className="number text-2xl md:text-3xl leading-6 uppercase text-[#C4151C] pb-2 font-bold">
                        {formattedNumber}
                    </h3>
                    <p className="title text-sm md:text-base font-normal leading-6">
                        {title}
                    </p>
                    <p className="titleEnglish text-sm md:text-base font-normal leading-6">
                        {titleEnglish}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImfomationBlock; 