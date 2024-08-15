import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarChartVew() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Video",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#4163E9",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 0.5,
      },
      {
        label: "Practice",
        data: [85, 72, 75, 90, 60, 65, 75],
        backgroundColor: "#061758",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Comparison",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        barThickness: 10,
      },
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarChartVew;
