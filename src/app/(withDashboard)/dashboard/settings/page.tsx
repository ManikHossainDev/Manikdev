"use client";
"use client";
import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { motion } from "framer-motion";
import { TestimonialsSection } from "./Components/TestimonialsSection";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const SuccessChartList = () => {
  // State to manage live chart data
  const [barData, setBarData] = useState([65, 59, 80, 81, 56]);
  const [lineData, setLineData] = useState([12, 19, 3, 5]);
  const [doughnutData, setDoughnutData] = useState([300, 50, 100]);

  // Function to simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update data randomly for simulation purposes
      setBarData(
        barData.map((data) => data + Math.round(Math.random() * 10 - 5))
      );
      setLineData(
        lineData.map((data) => data + Math.round(Math.random() * 10 - 5))
      );
      setDoughnutData(
        doughnutData.map((data) => data + Math.round(Math.random() * 10 - 5))
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [barData, lineData, doughnutData]);

  // Chart configurations with dynamic data
  const barChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Success Rate",
        data: barData,
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Success", "Failure", "Pending"],
    datasets: [
      {
        data: doughnutData,
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const lineChartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Success",
        data: lineData,
        fill: false,
        backgroundColor: "rgba(255,99,132,0.6)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  

  return (
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center text-[#00BBA6] mb-6">
        Live Success Metrics
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <motion.div
          className=" shadow-lg rounded-lg p-6 bg-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Monthly Success Rate
          </h3>
          <Bar
            data={barChartData}
            options={{ responsive: true, animation: { duration: 1000 } }}
          />
        </motion.div>

        {/* Doughnut Chart */}
        <motion.div
          className=" shadow-lg rounded-lg p-6 bg-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Overall Success Distribution
          </h3>
          <Doughnut
            data={doughnutChartData}
            options={{ responsive: true, animation: { duration: 1000 } }}
          />
        </motion.div>

        {/* Line Chart */}
        <motion.div
          className=" shadow-lg rounded-lg p-6 bg-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
            Weekly Success Trends
          </h3>
          <Line
            data={lineChartData}
            options={{ responsive: true, animation: { duration: 1000 } }}
          />
        </motion.div>
      </div>
      <h2 className="text-3xl mt-3 font-bold text-center text-[#00BBA6] pt-4">
        Success Student
      </h2>
      {/* Student List with Hover Effect */}
      <TestimonialsSection/>
    </motion.div>
  );
};

export default SuccessChartList;
