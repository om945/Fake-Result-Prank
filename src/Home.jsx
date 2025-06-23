import { useNavigate } from "react-router-dom";
import uni_logo from "./uni_logo.png";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 10) {
      navigate("/sukresult");
    } else {
      alert("Enter valid PRN");
    }
  };

  return (
    <div className="bg-[#e4e5e6] min-h-screen w-full flex flex-col items-center">
      <div className="w-full bg-white flex justify-center items-center">
        <img src={uni_logo} className="h-[4rem] sm:h-[6rem] lg:h-[8rem]" />
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <h1 className="text-[1.9rem] text-orange-500 md:text-[2.3rem]">
          ONLINE RESULT
        </h1>
        <div className="px-10 py-8 md:px-18 md:py-12 mt-4 flex flex-col justify-center items-center bg-white rounded-[0.20rem] gap-5 md:flex-row md:gap-10">
          <h4>
            University PRN<span className="text-red-500">*</span>
          </h4>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 md:gap-10 md:flex-row"
          >
            <input
              type="text"
              placeholder="Enter PRN (10 digit)"
              onChange={(e) => setInput(e.target.value)}
              className="w-[15rem] md:w-[24rem] border-[1px] border-[#d3d3d3] rounded-[0.25rem] px-3 py-1 focus:outline-4 focus:outline-[#c6f0ff]"
            />
            <button
              type="submit"
              className="bg-[#20a8d8] hover:bg-[rgb(35,175,216)] transition px-3 py-1 text-white rounded-[0.25rem] cursor-pointer"
            >
              View
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
