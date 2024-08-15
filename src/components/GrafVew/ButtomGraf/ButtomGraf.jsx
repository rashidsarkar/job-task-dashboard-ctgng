import { BiSolidBellRing } from "react-icons/bi";
import { BsBackpack4Fill, BsFillMenuAppFill } from "react-icons/bs";
import { DiGhostSmall } from "react-icons/di";
import { MdAssignment } from "react-icons/md";

function ButtomGraf() {
  const profilePic = "https://i.ibb.co/Y73MFcP/profile.png";
  return (
    <div>
      <div className=" bg-[#F7F7FF] p-4 mt-6 rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl">Type</th>
                <th className="text-xl">Due</th>
                <th className="text-xl">Faculty</th>
                <th className="text-xl">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td className="flex gap-3">
                  <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                    <MdAssignment className="text-3xl text-[#4163E9]" />
                  </div>
                  <div className="">
                    <span className="text-xl">Assignment -1</span>
                    <br />
                    <span className="">
                      Foundations of User Experience (UX) Design{" "}
                    </span>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td className="flex items-center gap-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h3 className="text-lg text-blue-500">Same Jhon</h3>
                </td>
                <th>
                  <button className="py-2 px-4 rounded-xl bg-[#272B8F] text-white">
                    Done
                  </button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td className="flex gap-3">
                  <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                    <BiSolidBellRing className="text-3xl text-[#4163E9]" />
                  </div>
                  <div className="">
                    <span className="text-xl">Last Class</span>
                    <br />
                    <span className="">
                      Foundations of User Experience (UX) Design{" "}
                    </span>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td className="flex items-center gap-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h3 className="text-lg text-blue-500">Same Jhon</h3>
                </td>
                <th>
                  <button className="py-2 px-4 rounded-xl bg-[#AA571B] text-white">
                    Coming
                  </button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td className="flex gap-3">
                  <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                    <DiGhostSmall className="text-3xl text-[#4163E9]" />
                  </div>
                  <div className="">
                    <span className="text-xl">Quiz- 2</span>
                    <br />
                    <span className="">
                      Foundations of User Experience (UX) Design{" "}
                    </span>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td className="flex items-center gap-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h3 className="text-lg text-blue-500">Same Jhon</h3>
                </td>
                <th>
                  <button className="py-2 px-4 rounded-xl bg-[#272B8F] text-white">
                    Done
                  </button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <td className="flex gap-3">
                  <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                    <BsBackpack4Fill className="text-3xl text-[#4163E9]" />
                  </div>
                  <div className="">
                    <span className="text-xl">Assignment -4</span>
                    <br />
                    <span className="">
                      Foundations of User Experience (UX) Design{" "}
                    </span>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td className="flex items-center gap-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h3 className="text-lg text-blue-500">Same Jhon</h3>
                </td>
                <th>
                  <button className="py-2 px-4 rounded-xl bg-[#AA571B] text-white">
                    Coming
                  </button>
                </th>
              </tr>
              <tr>
                <td className="flex gap-3">
                  <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                    <BsFillMenuAppFill className="text-3xl text-[#4163E9]" />
                  </div>
                  <div className="">
                    <span className="text-xl">Quiz- 2</span>
                    <br />
                    <span className="">
                      Foundations of User Experience (UX) Design{" "}
                    </span>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td className="flex items-center gap-2">
                  <img className="w-10" src={profilePic} alt="" />
                  <h3 className="text-lg text-blue-500">Same Jhon</h3>
                </td>
                <th>
                  <button className="py-2 px-4 rounded-xl bg-[#272B8F] text-white">
                    Done
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ButtomGraf;
