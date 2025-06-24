import { useEffect, useState } from "react";
import result_img from "./result_img.jpg";
import cat_meme from "./cat_meme.jpg";

const ResultPage = () => {
  const [showMeme, setShowMeme] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMeme(true);
    }, "3000");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center py-7 gap-7">
        <div className="flex flex-col items-center px-8">
          <h1 className="font-[700] text-center text-[0.8rem] mobile:text-[1rem] md:text-[1.2rem]">
            SHIVAJI UNIVERSITY, KOLHAPUR
          </h1>
          <h2 className="font-[700] text-center text-[0.8rem] mobile:text-[1rem] md:text-[1.2rem]">
            Online Statement of Marks for : B.Tech.CBCS Part 2 Semester 4
            (Semester-4)
          </h2>
          <h3 className="font-[700] text-center text-[0.8rem] mobile:text-[1rem] md:text-[1.2rem]">
            Examination : May - 2025
          </h3>
        </div>
        <div className="flex flex-col items-center">
          {showMeme ? (
            <div className="flex flex-col items-center">
              <img src={cat_meme} className="h-[15rem] sm:h-[25rem]" />
              <span className="text-[2rem]">SORRY!</span>
              <span className="text-0.3rem">from Om and Ratnesh</span>
            </div>
          ) : (
            <img
              src={result_img}
              className="h-[18rem] mobile:h-[20rem] sm:h-[30rem] md:h-[40rem]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
