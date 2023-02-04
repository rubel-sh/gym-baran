import Image from "next/image";
import Container from "../Container";
import quoteIcon from "../../assets/icons/quotes.svg";

const Testimonials = () => {
  return (
    <Container>
      <div className="text-primaryText relative">
        <h1 className="sporting text-2xl lg:text-5xl sporting-bold text-center leading-[73px]">
          Testimonials
        </h1>
        {/* Card Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2  mt-14 gap-6 lg:gap-16">
          {/* Single testimonial */}
          <div className="px-11 py-10 bg-white rounded-2xl ">
            <div className="flex items-start">
              <Image src={quoteIcon} className="mr-1" />
              <p className="opacity-50 text-[16px]">
                It's great to be able to work out from home and be helped by the
                gymbaran. My day feels fresher when I regularly participate in
                this fun sport. Good luck to the coaches.
              </p>
            </div>
            {/* author */}
            <div className="mt-14 flex items-center gap-8">
              <div className="bg-[#E275CD] min-w-[64px] min-h-[64px] inline-block rounded-2xl"></div>
              <div className="flex flex-col justify-between">
                <p className="font-bold font-poppins">Suketi Mantapo</p>
                <p className="opacity-50 font-poppins">Graphics Designer</p>
              </div>
            </div>
          </div>
          {/* Single testimonial */}
          <div className="px-11 py-10 bg-white rounded-2xl ">
            <div className="flex items-start">
              <Image src={quoteIcon} className="mr-1" />
              <p className="opacity-50 text-[16px]">
                It's great to be able to work out from home and be helped by the
                gymbaran. My day feels fresher when I regularly participate in
                this fun sport. Good luck to the coaches.
              </p>
            </div>
            {/* author */}
            <div className="mt-14 flex items-center gap-8">
              <div className="bg-[#E275CD] min-w-[64px] min-h-[64px] inline-block rounded-2xl"></div>
              <div className="flex flex-col justify-between">
                <p className="font-bold font-poppins">Suketi Mantapo</p>
                <p className="opacity-50 font-poppins">Graphics Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* dots */}
        <div className="flex gap-1 absolute -bottom-10 border right-1/2 translate-x-1/2 lg:translate-x-0 m lg:right-0 ">
          <div className="w-[5px] h-[5px] bg-primaryText/60 rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-primaryText/60 rounded-full"></div>
          <div className="w-[5px] h-[5px] bg-primaryText/60 rounded-full"></div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
