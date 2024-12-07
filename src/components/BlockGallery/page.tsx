import React from "react";
import MediaGrid from "../MediaGrid/page";

const BlockGallery = ({ data }: any) => {
  return (
    <div className="w-full block justify-center items-center lg:flex lg:flex-col gap-y-14">
      <div className="w-full max-w-[878px] text-center text-[#60585C] flex flex-col gap-y-5">
        <h3 className="mb-14 lg:mb-0 text-2xl lg:text-3xl font-medium leading-6 uppercase">
          KHÁM PHÁ ĐẠI HỌC QUỐC GIA HÀ NỘI
        </h3>
        <span className="hidden lg:block text-base font-normal leading-6">
          Khám phá Đại Học Quốc Gia Hà Nội qua truyền thông đa phương tiện
        </span>
      </div>
      <MediaGrid data={data} />
    </div>
  );
};

export default BlockGallery;
