import Image from "next/image";
import bigCircle from "../../assets/Ellipse 143.png";
import bannerImg from "../../assets/banner_image.png";
import right from "../../assets/icons/right.svg";
import play from "../../assets/icons/play.svg";
import brands from "../../assets/Brand logos/Group 3888.png";
import Container from "../Container";
console.log(bigCircle);
const HeroSection = () => {
  return (
    <Container>
      {/* <img src={bigCircle} alt="" className="absolute w-full h-full" /> */}
      {/* Blur bg image */}
      <Image
        src={bigCircle}
        className="absolute top-0 left-0 opacity-50 -z-10"
      ></Image>

      {/* Hero Contents */}
      <div className="grid md:grid-cols-2 mt-[170px] font-poppins text-primaryText">
        {/* Left Contents */}
        <div>
          <h1 className="text-[56px] font-sporting font-bold">
            Healthy in side <span className="text-primaryColor">fresh</span> out
            side
          </h1>
          <p className="opacity-50 py-6">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          {/* Btn Groups */}
          <div className="flex gap-8 mt-5">
            <button className="py-4 px-6 flex justify-between items-center rounded-lg bg-secondaryColor text-white gap-7 cursor-pointer shadow-2xl">
              <span>Get Started</span> <Image src={right} alt="" />
            </button>
            <button className="py-4 px-6 flex justify-between items-center rounded-lg bg-white text-secondaryColor gap-7 cursor-pointer shadow-2xl">
              <span>Learn More</span> <Image src={play} alt="" />
            </button>
          </div>
          {/* Brands */}
          <div className="mt-10">
            <p className="font-normal ">Brands:</p>
            <Image src={brands} />
          </div>
        </div>
        {/* Right Contnets */}
        <Image src={bannerImg} />
      </div>
    </Container>
  );
};

export default HeroSection;
