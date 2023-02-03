import Container from "../Container";

const Header = () => {
  return (
    <div className="absolute w-full top-0 left-0">
      <Container>
        <div className="flex justify-between items-center py-12">
          {/* Logo */}
          <div>
            <a href="#">
              <h1 className="text-lg font-bold text-primaryColor font-sporting cursor-pointer">
                <span className="bg-primaryColor rounded-lg py-1 px-2 mr-1 text-white">
                  Gym
                </span>{" "}
                baran
              </h1>
            </a>
          </div>

          <ul className="flex items-center gap-11 font-poppins">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Program</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#"
                className="py-3 px-9 bg-secondaryColor text-white rounded-lg"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Header;
