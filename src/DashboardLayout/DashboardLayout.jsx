import CardItem from "../components/CardItem/CardItem";
import Sidebar from "../components/Sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div>
      <div className="grid grid-cols-10 gap-4 p-4">
        {/* 20% width column */}
        <div className="col-span-2 p-4">
          <Sidebar />
        </div>

        {/* 30% width column */}
        <div className="col-span-3 p-4">
          <div className="grid gap-y-4 ">
            <CardItem
              text={"Foundations of User Experience (UX) Design"}
              assing={"4 Assignment"}
              video={" 20 Videos"}
              value={"80"}
            />

            <CardItem
              text={
                "Start the UX Design Process: Empathize, Define, and Ideate"
              }
              assing={"4 Assignment"}
              video={" 20 Videos"}
              value={"65"}
            />

            <CardItem
              text={"Build Wireframes and Low-Fidelity Prototypes"}
              assing={"4 Assignment"}
              video={" 20 Videos"}
              value={"85"}
            />
            <CardItem
              text={"Build Wireframes and Low-Fidelity Prototypes"}
              assing={"4 Assignment"}
              video={" 20 Videos"}
              value={"85"}
            />
          </div>
        </div>

        {/* 50% width column */}
        <div className="col-span-5 p-4 bg-red-500">
          <p className="text-white">50% Width</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
