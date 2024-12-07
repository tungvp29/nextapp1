import { useRouter } from "next/navigation";
import React from "react";

const BlockLink = ({ linkList }: any) => {
  const router = useRouter();

  return (
    <div className="w-full px-[5px] py-[10px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px]">
      {linkList.map((item: any, index: number) => (
        <div
          key={index}
          className="select-none cursor-pointer text-base md:text-xs w-full h-11 flex items-center justify-center bg-gradient-to-r from-[#C9C9C9] to-[#EAEAEA] lg:text-base font-medium leading-6 uppercase"
          onClick={() => router.push(item.Link)}
        >
          {item.Name}
        </div>
      ))}
    </div>
  );
};

export default BlockLink;
