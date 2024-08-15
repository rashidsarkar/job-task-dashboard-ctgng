import { BsFillMenuAppFill } from "react-icons/bs";
import { RiGraduationCapFill } from "react-icons/ri";
import { CgDatabase } from "react-icons/cg";
import { AiOutlineStock } from "react-icons/ai";

function TopGraf() {
  return (
    <div>
      <div className="flex justify-between gap-6 items-start">
        <div className=" flex bg-[#F7F7FF] p-8 rounded-2xl gap-12">
          <div className=" space-y-6">
            <h1 className="text-5xl font-bold">04</h1>
            <p className="font-semibold text-gray-400">Completed Course</p>
          </div>
          <div className=" space-y-4 ">
            <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
              <RiGraduationCapFill className="text-3xl text-[#4163E9]" />
            </div>
            <div className="">
              <h4 className=" flex justify-center items-center font-semibold text-gray-400">
                20% increase <AiOutlineStock className="ml-[2px]" />
              </h4>
            </div>
          </div>
        </div>
        <div className=" flex bg-[#F7F7FF] p-8 rounded-2xl gap-12">
          <div className=" space-y-6">
            <h1 className="text-5xl font-bold">12</h1>
            <p className="font-semibold text-gray-400">Course in Progress</p>
          </div>
          <div className=" space-y-4 ">
            <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
              <CgDatabase className="text-3xl text-[#4163E9]" />
            </div>
            <div className="">
              <h4 className="flex justify-center items-center   font-semibold text-gray-400">
                1% Decrease <AiOutlineStock className="ml-[2px]" />
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopGraf;
