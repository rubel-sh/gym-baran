import Image from "next/image";
import Container from "../Container";
import galary from "../../assets/icons/gallery.png";
import waves from "../../assets/waves.png";

const Footer = () => {
  return (
    <div className="bg-secondaryColor relative overflow-hidden">
      <Container>
        <div className="py-9 md:py-32 flex justify-between relative isolate">
          <Image src={waves} className="absolute -top-5 -left-28 -z-10" />
          {/* company descriptions */}
          <div>
            {/* Logo */}
            <div>
              <a href="#">
                <h1 className="text-lg font-bold text-white font-sporting cursor-pointer">
                  <span className="bg-white rounded-lg py-1 px-2 mr-1 text-primaryColor">
                    Gym
                  </span>{" "}
                  baran
                </h1>
              </a>
            </div>
            <p className="my-7 text-white/50 max-w-[333px]">
              We take care of your health with regular and fun exercise
            </p>
            {/* Socials */}
            <div className=" flex items-center gap-5">
              <div className="p-2 bg-[#E275CD]">
                <Image src={galary} className="" />
              </div>
              <div className="p-2 bg-[#E275CD]">
                <Image src={galary} className="" />
              </div>
              <div className="p-2 bg-[#E275CD]">
                <Image src={galary} className="" />
              </div>
              <div className="p-2 bg-[#E275CD]">
                <Image src={galary} className="" />
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="flex  gap-32">
            {/* Program Links */}
            <div>
              <p className="sporting text-[#F0F6FF] font-bold">Program</p>
              <ul className="md:mt-4 grid gap-2">
                <li className="text-white/50">
                  <a href="#">Workout</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Gym</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Cardio</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Zumba</a>
                </li>
              </ul>
            </div>
            {/* Blog Links */}
            <div>
              <p className="sporting text-[#F0F6FF] font-bold">Blog</p>
              <ul className="md:mt-4 grid gap-2">
                <li className="text-white/50">
                  <a href="#">Daily stretch</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Daily workout</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Cardio</a>
                </li>
              </ul>
            </div>
            {/* About us links */}
            <div className="lg:mr-10">
              <p className="sporting text-[#F0F6FF] font-bold">About Us</p>
              <ul className="md:mt-4 grid gap-2">
                <li className="text-white/50">
                  <a href="#">Support</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Contact</a>
                </li>
                <li className="text-white/50">
                  <a href="#">Address</a>
                </li>
              </ul>
            </div>
          </div>
          <Image src={waves} className="absolute -bottom-10 -right-28 -z-10" />
        </div>
      </Container>
    </div>
  );
};

export default Footer;
