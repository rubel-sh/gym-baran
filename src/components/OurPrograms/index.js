import Image from "next/image";
import Container from "../Container";
import gymnastGirl from "../../assets/icons/gymnast-girl.png";
import manYoga from "../../assets/icons/man-doing-yoga.png";
import strengthen from "../../assets/icons/Group.png";
import manYoga1 from "../../assets/icons/man-doing-yoga-.png";
import practicingPosture from "../../assets/icons/person-practicing-a-strengthen-posture.png";
import yogaPosture from "../../assets/icons/yoga-posture-.png";

const OurPrograms = () => {
  return (
    <Container>
      <div className="text-primaryText">
        <h1 className="font-poppins text text-2xl lg:text-5xl sporting-bold text-center md:leading-[73px]">
          Programs that can be taken
        </h1>
        {/* Card Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-16">
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#5478EF] to-[#9cb1ff]  grid place-items-center shadow-2xl rounded-full">
              <Image src={gymnastGirl} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">Get ABS in 2 weekss</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#4BACE1] to-[#96d4f6]  grid place-items-center shadow-2xl rounded-full">
              <Image src={manYoga} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">25 Mins full body workout</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#DD69C7] to-[#fbaced]  grid place-items-center shadow-2xl rounded-full">
              <Image src={strengthen} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">10 Mins toned arms workout</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#DD69C7] to-[#fbb1ee]  grid place-items-center shadow-2xl rounded-full">
              <Image src={manYoga1} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">15 Mins full body fat burn</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#5478EF] to-[#9eb3f9]  grid place-items-center shadow-2xl rounded-full">
              <Image src={practicingPosture} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">25 Mins HIIT workout</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
          <div className="flex ">
            {/* icon */}
            <div className="min-w-[80px] min-h-[80px] bg-gradient-to-r from-[#4BACE1] to-[#96d4f6]   grid place-items-center shadow-2xl rounded-full">
              <Image src={yogaPosture} className="" />
            </div>
            {/* texts */}
            <div className="ml-5">
              <p className="font-bold">Get ABS in 2 weeks</p>
              <p className="opacity-50 py-1 pr-3">
                Exercise is a very important need for our body.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurPrograms;
