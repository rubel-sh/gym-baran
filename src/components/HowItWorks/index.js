import Image from "next/image";
import Container from "../Container";
import rightArrow from "../../assets/icons/rightArrow.svg";
import how_it_works from "../../assets/how_it_works.png";

const HowItWorks = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 text-primaryText">
        {/* Left Content */}
        <div className="self-start">
          <Image src={how_it_works} />
        </div>

        {/* Right Content */}
        <div className="grid place-items-center">
          <div>
            <h1 className="font-sporting text-5xl">
              Best full body workout to lose fat
            </h1>
            <p className="font-poppins opacity-50 my-12">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home.{" "}
            </p>
            <button className="py-4 px-6 flex justify-between items-center rounded-lg bg-secondaryColor text-white gap-7 cursor-pointer shadow-2xl">
              <span>Get Started</span> <Image src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
