"use client";
import React from "react";
import { useState, useEffect } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { recentactivity,priorityschedules,otherschedules } from "../data";

function Updates() {
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

  return (
    <div className="lg:w-1/3 sm:w-full flex flex-col gap-4 h-screen mt-2">
      <div className="flex flex-col w-full">
         <p className="font-poppins font-medium text-base text-left bg-[#1B204A] text-white p-2 pl-4 rounded-t-md">Recent Activity</p>
         <div className="bg-[#161E54] w-full flex flex-col p-4 gap-4 rounded-b-md">
           <p className="text-[0.5rem] font-poppins text-white">{recentactivity.time}</p>
           <p className="text-lg font-medium font-poppins text-white">{recentactivity.Activity}</p>
           <p className="text-xs font-medium font-poppins text-white">{recentactivity.Precaution}</p>
           <div className="flex flex-row w-full pt-2 justify-between items-center">
               <p className="text-white font-poppins xl:text-xs lg:text-[0.5rem] sm:text-xs">Today you make {recentactivity.Number} Activity</p>
               <button className="w-2/5 p-2 font-poppins text-xs text-white bg-[#FF5151] rounded hover:scale-105 transition-all duration-150">See All Activity</button>
           </div>
         </div>
      </div>
      <div className="flex w-full h-[45%] flex-col pt-4 pl-4 pr-4 justify-center items-center bg-[#FFFFFF] border-2 border-[#E0E0E0] rounded-xl">
        <div className="flex w-full flex-row items-center justify-between">
          <p className="font-poppins text-base font-medium">Upcoming Schedule</p>
          <div className="bg-slate-50 p-1 rounded-md">
            <label
              htmlFor="date-select"
              className="font-poppins text-base font-normal"
            >
              Date:
            </label>
            <select
              id="date-select"
              value={selectedDate}
              onChange={handleDateChange}
              className="bg-slate-50"
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-2 items-center h-full overflow-y-scroll scroll-smooth scrollbar-hide">
          <p className="text-xs font-poppins text-gray-400 mr-auto">Priority</p>
          {priorityschedules.map((message,index) => {
            return (
              <div className="flex flex-row justify-between items-center w-[95%] bg-slate-50 p-3 rounded-md hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out" key={index}>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-poppins">{message.message}</p>
                  <p className="text-sm text-stone-300 font-poppins">
                    {message.time}
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">
                  <HiDotsHorizontal className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer" />
                </div>
              </div>
            );
          })}
          <p className="text-xs font-poppins text-gray-400 mr-auto">Other</p>
          {otherschedules.map((message,index) => {
            return (
              <div className="flex flex-row justify-between items-center w-[95%] bg-slate-50 p-3 rounded-md hover:scale-105 cursor-pointer transition-all duration-150 ease-in-out" key={index}>
                <div className="flex flex-col gap-2">
                  <p className="text-base font-poppins">{message.message}</p>
                  <p className="text-sm text-stone-300 font-poppins">
                    {message.time}
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-center justify-center">
                  <HiDotsHorizontal className="w-6 h-6 text-gray-400 hover:text-black cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center py-2 border-t-2 border-gray-300 mt-2 w-full">
          <p className="text-base font-poppins font-medium text-[#FF5151]">
            Create a New Schedule
          </p>
        </div>
      </div>
    </div>
  );
}

export default Updates;
