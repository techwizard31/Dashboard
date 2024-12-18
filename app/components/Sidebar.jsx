import React from "react";
import Logo from "../../public/companysign.svg";
import Image from "next/image";

function Sidebar() {

  return (
    <div className="flex flex-col gap-5 bg-slate-100 w-[30%] h-screen lg:p-5 lg:max-w-[260px]">
      <div className="flex flex-row items-center gap-3 p-2">
        <Image src={Logo} className="w-12 h-12" />
        <p className="font-poppins text-primary text-3xl font-medium">
          VASITUM
        </p>
      </div>
      <div className="flex flex-col w-full gap-2 h-3/5 items-start justify-around pl-2">
        <p className="font-poppins font-light text-gray-400">MAIN MENU</p>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full group-hover:fill-selected"
            >
              <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Dashboard
          </p>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8C5 8.79112 5.2346 9.56448 5.67412 10.2223C6.11365 10.8801 6.73836 11.3928 7.46927 11.6955C8.20017 11.9983 9.00444 12.0775 9.78036 11.9231C10.5563 11.7688 11.269 11.3878 11.8284 10.8284C12.3878 10.269 12.7688 9.55628 12.9231 8.78036C13.0775 8.00444 12.9983 7.20017 12.6955 6.46927C12.3928 5.73836 11.8801 5.11365 11.2223 4.67412C10.5645 4.2346 9.79112 4 9 4C7.93913 4 6.92172 4.42143 6.17157 5.17157C5.42143 5.92172 5 6.93913 5 8Z"
                // fill="#B2B2B2"
              />
              <rect x="3" y="14" width="12" height="6" rx="3" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 8H17V10L15 10V12H17V14H19V12H21V10L19 10V8Z"
              />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Recruitment
          </p>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.2222 4.8H16.4444V3H14.6667V4.8H9.33333V3H7.55556V4.8H5.77778C4.79733 4.8 4 5.6073 4 6.6V19.2C4 20.1927 4.79733 21 5.77778 21H18.2222C19.2027 21 20 20.1927 20 19.2V6.6C20 5.6073 19.2027 4.8 18.2222 4.8ZM17.3333 18.3H12V12.9H17.3333V18.3ZM18.2222 9.3H5.77778V7.5H18.2222V9.3Z" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Schedule
          </p>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6Z" />
              <path d="M18 8C18 8.53043 17.7893 9.03914 17.4142 9.41421C17.0391 9.78929 16.5304 10 16 10C15.4696 10 14.9609 9.78929 14.5858 9.41421C14.2107 9.03914 14 8.53043 14 8C14 7.46957 14.2107 6.96086 14.5858 6.58579C14.9609 6.21071 15.4696 6 16 6C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8Z" />
              <path d="M6 8C6 8.53043 5.78929 9.03914 5.41421 9.41421C5.03914 9.78929 4.53043 10 4 10C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6C4.53043 6 5.03914 6.21071 5.41421 6.58579C5.78929 6.96086 6 7.46957 6 8Z" />
              <path d="M16 18V15C16.0014 13.9833 15.7433 12.983 15.25 12.094C15.6933 11.9805 16.1568 11.9698 16.6049 12.0627C17.053 12.1556 17.474 12.3496 17.8357 12.6299C18.1974 12.9102 18.4903 13.2695 18.6921 13.6802C18.8939 14.091 18.9992 14.5424 19 15V18H16Z" />
              <path d="M4.75 12.094C4.25675 12.983 3.9986 13.9833 4 15V18H1V15C0.999808 14.542 1.10446 14.0901 1.30595 13.6788C1.50743 13.2676 1.80039 12.9079 2.16238 12.6274C2.52437 12.3469 2.94578 12.153 3.39431 12.0605C3.84284 11.968 4.30658 11.9795 4.75 12.094Z" />
              <rect x="6" y="11" width="8" height="7" rx="3" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Employee
          </p>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3C7.032 3 3 7.032 3 12C3 16.968 7.032 21 12 21C16.968 21 21 16.968 21 12C21 7.032 16.968 3 12 3ZM8.4 16.95C7.80326 16.95 7.23097 16.7129 6.80901 16.291C6.38705 15.869 6.15 15.2967 6.15 14.7C6.15 14.1033 6.38705 13.531 6.80901 13.109C7.23097 12.6871 7.80326 12.45 8.4 12.45C8.99674 12.45 9.56903 12.6871 9.99099 13.109C10.4129 13.531 10.65 14.1033 10.65 14.7C10.65 15.2967 10.4129 15.869 9.99099 16.291C9.56903 16.7129 8.99674 16.95 8.4 16.95ZM9.75 8.4C9.75 7.80326 9.98705 7.23097 10.409 6.80901C10.831 6.38705 11.4033 6.15 12 6.15C12.5967 6.15 13.169 6.38705 13.591 6.80901C14.0129 7.23097 14.25 7.80326 14.25 8.4C14.25 8.99674 14.0129 9.56903 13.591 9.99099C13.169 10.4129 12.5967 10.65 12 10.65C11.4033 10.65 10.831 10.4129 10.409 9.99099C9.98705 9.56903 9.75 8.99674 9.75 8.4ZM15.6 16.95C15.0033 16.95 14.431 16.7129 14.009 16.291C13.5871 15.869 13.35 15.2967 13.35 14.7C13.35 14.1033 13.5871 13.531 14.009 13.109C14.431 12.6871 15.0033 12.45 15.6 12.45C16.1967 12.45 16.769 12.6871 17.191 13.109C17.6129 13.531 17.85 14.1033 17.85 14.7C17.85 15.2967 17.6129 15.869 17.191 16.291C16.769 16.7129 16.1967 16.95 15.6 16.95Z" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Department
          </p>
        </div>
        <p className="font-poppins font-light text-gray-400">OTHER</p>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3C7.0374 3 3 7.0374 3 12V15.7287C3 16.6503 3.8073 17.4 4.8 17.4H5.7C5.93869 17.4 6.16761 17.3052 6.3364 17.1364C6.50518 16.9676 6.6 16.7387 6.6 16.5V11.8713C6.6 11.6326 6.50518 11.4037 6.3364 11.2349C6.16761 11.0661 5.93869 10.9713 5.7 10.9713H4.8828C5.3832 7.4883 8.3802 4.8 12 4.8C15.6198 4.8 18.6168 7.4883 19.1172 10.9713H18.3C18.0613 10.9713 17.8324 11.0661 17.6636 11.2349C17.4948 11.4037 17.4 11.6326 17.4 11.8713V17.4C17.4 18.3927 16.5927 19.2 15.6 19.2H13.8V18.3H10.2V21H15.6C17.5854 21 19.2 19.3854 19.2 17.4C20.1927 17.4 21 16.6503 21 15.7287V12C21 7.0374 16.9626 3 12 3Z" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Support
          </p>
        </div>
        <div className="flex flex-row gap-2 cursor-pointer group transition-all duration-150 ease-in-out hover:scale-105">
          <div className="group w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#B2B2B2"
              className="w-full h-full group-hover:fill-selected"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.3703 20H10.0943C9.88901 20 9.6899 19.9299 9.52997 19.8012C9.37004 19.6726 9.25889 19.4931 9.21497 19.2926L8.84867 17.597C8.36002 17.3829 7.89668 17.1151 7.46717 16.7987L5.81387 17.3252C5.61818 17.3876 5.40702 17.3812 5.21548 17.307C5.02393 17.2329 4.86351 17.0954 4.76087 16.9175L3.11927 14.0816C3.0177 13.9035 2.97957 13.6962 3.01113 13.4937C3.04268 13.2911 3.14205 13.1052 3.29297 12.9665L4.57547 11.7965C4.51715 11.2665 4.51715 10.7317 4.57547 10.2017L3.29297 9.0344C3.14183 8.8956 3.04233 8.70957 3.01077 8.5068C2.97921 8.30404 3.01747 8.09657 3.11927 7.9184L4.75727 5.0807C4.85991 4.90278 5.02033 4.76533 5.21188 4.69117C5.40342 4.61701 5.61458 4.61059 5.81027 4.673L7.46357 5.1995C7.68317 5.0375 7.91177 4.8863 8.14757 4.7495C8.37527 4.6217 8.60927 4.5056 8.84867 4.4021L9.21587 2.7083C9.25958 2.50778 9.37052 2.32822 9.53028 2.19939C9.69004 2.07057 9.88904 2.00022 10.0943 2H13.3703C13.5755 2.00022 13.7745 2.07057 13.9343 2.19939C14.094 2.32822 14.205 2.50778 14.2487 2.7083L14.6195 4.403C14.8715 4.5146 15.1181 4.6397 15.3566 4.7792C15.5789 4.9079 15.794 5.0492 16.001 5.2013L17.6552 4.6748C17.8507 4.61262 18.0617 4.61915 18.253 4.6933C18.4444 4.76746 18.6047 4.90478 18.7073 5.0825L20.3453 7.9202C20.5541 8.2865 20.4821 8.75 20.1716 9.0353L18.8891 10.2053C18.9474 10.7353 18.9474 11.2701 18.8891 11.8001L20.1716 12.9701C20.4821 13.2563 20.5541 13.7189 20.3453 14.0852L18.7073 16.9229C18.6046 17.1008 18.4442 17.2383 18.2527 17.3124C18.0611 17.3866 17.85 17.393 17.6543 17.3306L16.001 16.8041C15.5718 17.1203 15.1087 17.3878 14.6204 17.6015L14.2487 19.2926C14.2048 19.493 14.0938 19.6723 13.934 19.801C13.7743 19.9296 13.5754 19.9998 13.3703 20ZM11.7287 7.4C10.7739 7.4 9.85822 7.77928 9.18308 8.45442C8.50795 9.12955 8.12867 10.0452 8.12867 11C8.12867 11.9548 8.50795 12.8705 9.18308 13.5456C9.85822 14.2207 10.7739 14.6 11.7287 14.6C12.6834 14.6 13.5991 14.2207 14.2743 13.5456C14.9494 12.8705 15.3287 11.9548 15.3287 11C15.3287 10.0452 14.9494 9.12955 14.2743 8.45442C13.5991 7.77928 12.6834 7.4 11.7287 7.4Z" />
            </svg>
          </div>
          <p className="font-poppins text-base group-hover:text-selected">
            Settings
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
