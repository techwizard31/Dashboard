import EmployeeData from "./components/EmployeeData";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Updates from "./components/Updates";

export default function Home() {
  return (
     <div className="flex m-0 p-0 flex-row bg-white">
     <Sidebar />
     <div className="m-0 flex flex-col w-full">
      <Navbar />
      <div className="h-[1px] w-[calc(100%-2.5rem)] ml-auto bg-slate-300"></div>
      <p className="font-poppins text-2xl font-medium text-primary pl-10 mt-2">Dashboard</p>
       <div className="flex flex-row gap-4 px-10 w-full sm:flex-wrap lg:flex-nowrap">
        <EmployeeData />
        <Updates />
       </div>
     </div>
  </div>
  )
}
