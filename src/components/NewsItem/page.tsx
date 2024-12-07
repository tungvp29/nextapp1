'use client';

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import ImageWithFallback from "../ImageWithFallback/page";

import { useRouter } from 'next/navigation'

const NewsItem = ({
  image,
  title,
  description,
  isPrimary,
  titleStyle,
  path,
}: any) => {
  const router = useRouter();

  return (
    <Card className="w-full rounded-none bg-[#F8F8F8] cursor-pointer" onClick={() => router.push(path)}>
      <div className="w-full relative aspect-[3/2]">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full"
          fallbackSrc={`${process.env.CHECK_IMAGE}`}
        />
      </div>
      <CardHeader>
        <CardTitle
          className={
            titleStyle ||
            "text-[#60585C] text-xl leading-6 line-clamp-2 min-h-[52px]"
          }
        >
          {title}
        </CardTitle>
      </CardHeader>
      {description && (
        <CardContent className="min-h-[100px]">
          <p className="text-[#60585C] text-sm leading-5 line-clamp-4">
            {description}
          </p>
        </CardContent>
      )}
      {isPrimary && (
        <CardFooter className="flex justify-end">
          <button className="text-[#60585C] italic text-sm font-medium hover:text-black">
            {isPrimary}
          </button>
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsItem;
