import Image from "next/image";
import Link from "next/link";
import './CEOGreeting.css';

const CEOGreeting = () => {
    return (
        <div className="flex flex-col items-center justify-center text-[#60585C] px-4 md:px-8 lg:px-16">
            <h3 className="text-xl md:text-3xl font-medium leading-6 uppercase text-[#60585C] pb-6 text-center">
                LỜI CHÀO MỪNG CỦA GIÁM ĐỐC ĐẠI HỌC QUỐC GIA HÀ NỘI
            </h3>
            <p className="pb-6 text-center hidden sm:block">Đổi mới sáng tạo - Trách nhiệm quốc gia - Phát triển bền vững</p>
            <div className="w-full flex justify-center">
                <section className="bg-bannerCEOGreeting w-full h-[300px] md:h-[400px] bg-no-repeat bg-cover relative">
                    <div className="image-overlay-ceogreeting w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div className="container-content-ceogreeting pb-6 xl:pb-6 pt-4 xl:pt-8 bg-[#038141] mx-2 mt-2 md:mt-6 lg:mt-12 mb-4 lg:mb-12 border-2 rounded-lg border-none opacity-80 ml-3 lg:ml-8 max-h-max">
                            <div className="content-ceogreeting mx-3 px-1 md:px-2 lg:px-6 xl:px-9">
                                <h3 className="text-xl md:text-1xl lg:text-2xl xl:text-3xl font-medium leading-6 uppercase text-white mb-4 lg:mb-4 xl:mb-6">ĐỊNH HƯỚNG TƯƠNG LAI</h3>
                                <p className="imformation-ceogreeting text-wrap text-sm md:text-sm lg:text-base text-white mb-12 lg:mb-6">Tại Đại học Quốc gia Hà Nội, chúng tôi đang hành động mạnh dạn và đồng bộ để mở rộng biên giới của ngày mai. Chúng tôi tin rằng chúng tôi có sức mạnh để định hình tương lai, theo hướng tốt đẹp hơn</p>
                                <button className="button bg-transparent text-white border-2 hover:border-[#cab03e] hover:text-[#cab03e] border-white rounded-sm flex items-center py-1 px-3 float-end">Tìm hiểu thêm
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-3" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CEOGreeting;