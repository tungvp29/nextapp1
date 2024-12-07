import Image from "next/image";
import Link from "next/link";
import './WhyChoose.css';
import { MuseoModerno } from 'next/font/google';
import { title } from "process";
import ImageWithFallback from "../ImageWithFallback/page";

const museomoderno = MuseoModerno({
    subsets: ['latin-ext'],
    weight: ['700'], // Specify the weights you need
});
const WhyChoose = () => {
    return (
        <div className="w-full flex justify-center">
            <section className="bg-bgWhyChoose w-full h-[380px] md:h-[542px] bg-no-repeat bg-cover relative">
                <div className="image-overlay-whychoose w-full h-full">
                    <h3 className="text-xl md:text-3xl font-medium leading-6 uppercase text-[#ffffff] pb-4 lg:pb-10 pt-4 lg:pt-10 text-center">
                        TẠI SAO CHỌN ĐẠI HỌC QUỐC GIA HÀ NỘI
                    </h3>
                    <div className="container-all-whychoose h-fit grid grid-cols-1 lg:grid-cols-3">
                        <div className="container-content-whychoose pb-3 xl:pb-6 pt-2 xl:pt-8 mx-2 mt-2 md:mt-6 lg:mt-12 mb-4 lg:mb-12 border-2 rounded-lg border-none ml-3 lg:ml-8 max-h-max col-span-2">
                            <div className="content-whychoose mx-1 lg:mx-2 px-1 lg:px-2 xl:px-4">
                                <div className={museomoderno.className + " flex mb-4 lg:mb-4 xl:mb-6"}>
                                    <Image src={'svgs/svg_double_quotes_left.svg'} alt={title} width={40} height={25} className="self-start" />
                                    <h3 className="title-whychoose text-xl md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-3xl font-medium leading-6 uppercase text-white ">
                                        <p className="whitespace-pre-line text-nowrap"><span className="text-[#F8BF07]">Đời sống sinh viên</span> chất lượng, phong phú.</p>
                                        <p className="whitespace-pre-line text-nowrap">Cộng đồng sinh viên <span className="text-[#F8BF07]">năng động, nhân văn</span></p>
                                    </h3>
                                    <Image src={'svgs/svg_double_quotes_right.svg'} alt={title} width={40} height={25} className="self-end" />
                                </div>
                                <div className="mb-1 lg:mb-6 flex">
                                    <Image src={'svgs/svg_double_quotes_left.svg'} alt={title} width={40} height={25} className="self-start invisible" />
                                    <p className="imformation-whychoose text-wrap text-sm md:text-sm lg:text-base text-white ">Tại Đại học Quốc gia Hà Nội, sinh viên được trải nghiệm toàn diện, từ học tập, nghiên cứu, sáng tạo đến hoạt động văn hóa, nghệ thuật, giải trí và đóng góp hết mình trong các hoạt động xã hội</p>
                                    <Image src={'svgs/svg_double_quotes_right.svg'} alt={title} width={40} height={25} className="self-end invisible " />
                                </div>
                            </div>
                        </div>
                        <div className="container-image-whychoose w-full h-full hidden md:block">
                            <div className="image-whychoose w-full h-full rounded-full flex md:items-center md:justify-center ">
                                <div className="image-outline-whychoose w-[290px] h-[290px]  rounded-full outline-dashed outline-2 outline-[#ffffff] flex items-center justify-center">
                                    <ImageWithFallback
                                        src={"/images/home/whychoose/VNU-hoi-trai.png"}
                                        alt={"VNU-hoi-trai"}
                                        className="w-[260px] h-[260px] object-cover"
                                        fallbackSrc={`${process.env.CHECK_IMAGE}`}
                                    />
                                </div>
                            </div>
                            {/* <div className="relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                                <div className="absolute flex items-center justify-center bg-white rounded-full w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                                    <Image src="/images/home/whychoose/VNU-hoi-trai.png" alt="whychoose" width={0} height={0} sizes="300" className="w-64 h-64 rounded-full object-cover" />
                                </div>
                                <div className="absolute border-2 border-dashed border-white rounded-full w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80"></div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChoose;