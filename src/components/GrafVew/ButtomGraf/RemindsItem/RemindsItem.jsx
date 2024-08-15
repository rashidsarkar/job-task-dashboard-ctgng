const profilePic = "https://i.ibb.co/Y73MFcP/profile.png";
import { MdAssignment } from "react-icons/md";

function RemindsItem() {
  return (
    <>
      <td className="flex gap-3">
        <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
          <MdAssignment className="text-3xl text-[#4163E9]" />
        </div>
        <div className="">
          <span className="text-xl">Assignment -1</span>
          <br />
          <span className="">Foundations of User Experience (UX) Design </span>
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
    </>
  );
}

export default RemindsItem;
