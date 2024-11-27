'use client';
import "./Nav.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Battery from '@/../public/images/battery.png';

export default function Nav(){
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    // Function to format the time in HH:MM format
    const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    // Function to format the date in MM/DD format
    const formatDate = (date) => {
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
        const day = String(date.getDate()).padStart(2, "0");
        return `${month}/${day}`;
    };

    // Update the time every second
    useEffect(() => {
        const updateClock = () => {
            const currentTime = new Date();
            setTime(formatTime(currentTime));
            setDate(formatDate(currentTime));
        };

        // Initial set time
        updateClock();

        // Set interval to update time every second
        const interval = setInterval(updateClock, 1000);

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="nav-container">
            <div className="profile-container">
                <span>Fuji</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M9.33335 14H10.5V15.1667H17.5V14H18.6667V12.8333H19.8334V5.83333H18.6667V4.66667H17.5V3.5H10.5V4.66667H9.33335V5.83333H8.16669V12.8333H9.33335V14ZM10.5 8.16667H11.6667V7H12.8334V5.83333H15.1667V7H16.3334V8.16667H17.5V10.5H16.3334V11.6667H15.1667V12.8333H12.8334V11.6667H11.6667V10.5H10.5V8.16667Z" fill="#F4FFFF"/>
                    <path d="M22.1667 18.6667V17.5H21V16.3334H7.00002V17.5H5.83335V18.6667H4.66669V24.5H7.00002V21H8.16669V19.8334H9.33335V18.6667H18.6667V19.8334H19.8334V21H21V24.5H23.3334V18.6667H22.1667Z" fill="#F4FFFF"/>
                </svg>
            </div>
            <div className="time-container">
                <span>{time}</span>
                <span>{date}</span>
                <Image src={Battery} width={40} height={23} alt="oops"/>
            </div>
        </div>
    )
}