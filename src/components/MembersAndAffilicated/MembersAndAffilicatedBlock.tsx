import Link from 'next/dist/client/link';
import Image from 'next/image';
import ImageWithFallback from '../ImageWithFallback/page';


interface ImfomationBlockProps {
    imageSrc: string;
    title: string;
    url: string;
}

const MembersAndAffilicatedBlock = ({ imageSrc, title, url }: ImfomationBlockProps) => {
    // Format the number with a dot as a thousand separator
    return (
        <Link href={url}>
        <div className="imfomation-content p-4 shadow-[5px_5px_10px_2px_rgba(0,0,0,0.2)] rounded-lg hover:bg-[#00803D] hover:text-white group" >
            <div className="imfomation-block flex flex-col md:flex-row items-center group">
                <div className='imfomation-icon w-12 h-12 md:w-20 md:h-20 flex-shrink-0'>
                    <ImageWithFallback
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
                        fallbackSrc={`${process.env.CHECK_IMAGE}`}
                        />
                </div>
                <div className="imfomation-block-text mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <p className="title text-lg font-bold md:text-base leading-6">
                        {title}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default MembersAndAffilicatedBlock;