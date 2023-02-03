import Image from "next/image";
import Container from "../Container";
import rightArrow from "../../assets/icons/rightArrow.svg";
import crucifiedpose from "../../assets/icons/crucified-pose.png";
const DailyChallenges = () => {
  return (
    <Container>
      <div className="bg-gradient-to-r from-[#6462F0] to-[#9190E9] rounded-2xl p-20">
        <div className="grid md:grid-cols-3 gap-x-20">
          <div className="flex gap-8">
            {/* image */}
            <div className="p-8 bg-white/20 grid place-items-center rounded-xl">
              <Image src={crucifiedpose} />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} />
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            {/* image */}
            <div className="p-8 bg-white/20 grid place-items-center rounded-xl">
              <Image src={crucifiedpose} />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} />
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            {/* image */}
            <div className="p-8 bg-white/20 grid place-items-center rounded-xl">
              <Image src={crucifiedpose} />
            </div>
            {/* Texts & btn */}
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-bold text-white">
                Get that 11 line in 30 days
              </h2>
              <button className="flex items-center gap-10 text-white/50 ">
                Learn more <Image src={rightArrow} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DailyChallenges;
