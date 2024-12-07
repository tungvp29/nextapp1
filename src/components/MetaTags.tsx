"use client"

import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";

interface MetaTagsProps {
    url: string;
    urlOrigin: string;
    title: string;
    description: string;
    imageUrl: string;
    thumbnailUrl: string;
}


const MetaTags = () => {
    const metaTags = useSelector((state: RootState) => state.metaTags);

    return (
        <head>
            {/* 5 */}
            <meta name="name" content={metaTags.title} />
            <meta name="description" content={metaTags.description} />
            <meta name="generator" content={metaTags.urlOriginal} />


            {/* 1 */}
            <meta itemProp="url" property="og:url" content={metaTags.url} />
            <meta itemProp="headline" property="og:title" content={metaTags.title} />
            <meta itemProp="description" property="og:description" content={metaTags.description} />
            <meta itemProp="thumbnailUrl" property="og:image" content={metaTags.thumbnailUrl} />
            <meta itemProp="image" property="og:image" content={metaTags.imageUrl} />
            
            {/* 2 */}
            <meta property="og:type" content="website" />
            {/* 3 */}
            <meta property="og:site_name" content={metaTags.urlOriginal}></meta>
            {/* 4 */}
            <meta itemProp="name" content={metaTags.title} />
            <meta itemProp="description" content={metaTags.description} />
            <title>{metaTags.title}</title>
        </head>
    );
};

export default MetaTags;
