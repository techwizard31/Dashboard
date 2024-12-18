"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect } from "react";
import { BsFillPinAngleFill } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";

function EmployeeData() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [dateOptions, setDateOptions] = useState([]);

  function populateDateOptions() {
    const today = new Date();
    const dateOptions = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
      dateOptions.push({
        value: date.toISOString().slice(0, 10),
        label: date.toLocaleDateString(),
      });
    }

    setDateOptions(dateOptions);
  }
  function handleDateChange(e) {
    setSelectedDate(e.target.value);
    console.log("Selected date:", e.target.value);
    // Add any additional logic you want to perform based on the selected date
  }

  useEffect(() => {
    populateDateOptions();
  }, []);

  const series = [
    {
      name: "Progress",
      data: [10, 20, 18, 25, 30],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.0,
        stops: [0, 90, 100],
        colorStops: [
          { offset: 0, color: "#FF5151", opacity: 0.7 },
          { offset: 100, color: "#FF5151", opacity: 0 },
        ],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: ["#FF5151"],
    },
    markers: {
      size: 0,
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: { show: false },
    xaxis: {
      labels: { show: false },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: { labels: { show: false } },
  };

  return (
    <div className="lg:w-2/3 sm:w-full flex flex-col gap-4 mt-2">
      <div className="w-full flex flex-row gap-2">
        <div className="w-[30%] h-36 bg-[#FFEFE7] rounded-xl flex flex-col justify-center items-start gap-3 xl:p-4 sm:p-4 lg:p-3 xl:min-w-48 lg:min-w-40 sm:min-w-48">
          <p className="xl:text-lg sm:text-lg lg:text-base font-poppins font-medium whitespace-nowrap">
            Available Position
          </p>
          <p className="xl:text-2xl sm:text-2xl lg:text-xl font-poppins font-semibold">
            24
          </p>
          <p className="text-xs font-poppins font-normal text-[#FF5151]">
            4 Urgently needed
          </p>
        </div>
        <div className="w-[30%] h-36 bg-[#E8F0FB] rounded-xl flex flex-col justify-center items-start gap-3 xl:p-4 sm:p-4 lg:p-3 xl:min-w-48 lg:min-w-40 sm:min-w-48">
          <p className="xl:text-lg sm:text-lg lg:text-base font-poppins font-medium whitespace-nowrap">
            Job Open
          </p>
          <p className="xl:text-2xl sm:text-2xl lg:text-xl font-poppins font-semibold">
            10
          </p>
          <p className="text-xs font-poppins font-normal text-[#3786F1]">
            4 Actively hiring
          </p>
        </div>
        <div className="w-[30%] h-36 bg-[#FDEBF9] rounded-xl flex flex-col justify-center items-start gap-3 xl:p-4 sm:p-4 lg:p-3 xl:min-w-48 lg:min-w-40 sm:min-w-48">
          <p className="xl:text-lg sm:text-lg lg:text-base font-poppins font-medium whitespace-nowrap">
            New Employees
          </p>
          <p className="xl:text-2xl sm:text-2xl lg:text-xl font-poppins font-semibold">
            24
          </p>
          <p className="text-xs font-poppins font-normal text-[#EE61CF]">
            4 Department
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="w-[45%] h-40 flex flex-row p-4 bg-[#FFFFFF] border-2 border-[#E0E0E0] rounded-xl">
          <div className="flex flex-col w-1/2 justify-start">
            <p className="xl:text-lg sm:text-lg lg:text-base font-poppins font-medium whitespace-nowrap">
              Total Employees
            </p>
            <p className="xl:text-4xl sm:text-4xl lg:text-3xl font-poppins font-semibold pt-2">
              216
            </p>
            <p className="text-gray-400 font-poppins font-light text-sm pt-4">
              120 Men
            </p>
            <p className="text-gray-400 font-poppins font-light text-sm">
              96 Women
            </p>
          </div>
          <div className="flex flex-col w-1/2 -translate-y-2">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height="auto"
              width={160}
            />
            <div className="whitespace-nowrap bg-[#FFEFE7] w-max font-poppins p-1 text-xs mx-auto rounded-md px-2">
              +2% Past month
            </div>
          </div>
        </div>
        <div className="w-[45%] h-40 flex flex-row p-4 bg-[#FFFFFF] border-2 border-[#E0E0E0] rounded-xl">
          <div className="flex flex-col w-1/2 justify-start">
            <p className="xl:text-lg sm:text-lg lg:text-base font-poppins font-medium whitespace-nowrap">
              Talent Request
            </p>
            <p className="xl:text-4xl sm:text-4xl lg:text-3xl font-poppins font-semibold pt-2">
              16
            </p>
            <p className="text-gray-400 font-poppins font-light text-sm pt-4">
              6 Men
            </p>
            <p className="text-gray-400 font-poppins font-light text-sm">
              10 Women
            </p>
          </div>
          <div className="flex flex-col w-1/2 -translate-y-2">
            <ReactApexChart
              options={options}
              series={series}
              type="area"
              height="auto"
              width={160}
            />
            <div className="whitespace-nowrap bg-[#FFEFE7] w-max font-poppins p-1 text-xs mx-auto rounded-md px-2">
              +5% Past month
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col pt-2 pl-2 pr-2 justify-center items-center mt-2">
        <div className="flex w-full flex-row items-center justify-between">
          <p>Announcement</p>
          <div>
            <label htmlFor="date-select">Date:</label>
            <select
              id="date-select"
              value={selectedDate}
              onChange={handleDateChange}
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
           <div className="flex flex-row justify-between items-center">
             <div className="flex flex-col gap-2">
                <p>Outing schedule for every department</p>
                <p>5 Minutes ago</p>
             </div>
             <div className="flex flex-row gap-4 items-center justify-center">
             <BsFillPinAngleFill className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600" />
             <HiDotsHorizontal className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeData;
