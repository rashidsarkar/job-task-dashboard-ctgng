import BarChartVew from "./BarChartVew/BarChartVew";

function MIdGrafVew() {
  return (
    <div>
      <div className="bg-[#F7F7FF] p-4 mt-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Course Activity</h2>
          <h2 className="text-2xl font-semibold bg-white rounded-full px-4 py-1">
            Monthly
          </h2>
        </div>
        <BarChartVew />
      </div>
    </div>
  );
}

export default MIdGrafVew;
