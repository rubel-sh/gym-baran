import Image from "next/image";
import Container from "../Container";
import rightArrow from "../../assets/icons/rightArrow.svg";
import how_it_works from "../../assets/how_it_works.png";

const HowItWorks = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-2 text-primaryText">
        {/* Left Content */}
        <div className="self-start order-2 md:order-1 mt-16 md:mt-0">
          <Image src={how_it_works} />
        </div>

        {/* Right Content */}
        <div className="grid place-items-center order-1 md:order-2">
          <div>
            <h1 className="font-sporting  mb-8 text-2xl lg:text-5xl sporting-bold">
              How it works?
            </h1>
            <div className="font-poppins flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-2xl shadow-[#334e7b4d] text-primaryText text-lg px-9 py-8">
                <h1>The body becomes sick because of rarely exercise</h1>
              </div>
              <div className="bg-white/50 rounded-lg shadow-sm text-primaryText/50 text-lg px-9 py-8">
                <h1>Don't give up in order to get a healthy and ideal body</h1>
              </div>
              <div className="bg-white/50 rounded-lg shadow-sm text-primaryText/50 text-lg px-9 py-8">
                <h1>Become addicted to the exercise that is given</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
