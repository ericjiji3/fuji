'use client';
import "./Footer.css";
import Image from "next/image";
import Arrow from '@/../public/images/arrow.png';
import Sun from '@/../public/images/Sun.png';
import Night from '@/../public/images/night-icon.png';
import { usePathname } from "next/navigation";
import Link from "next/link";


export default function Footer(){
    const pathname = usePathname();
    const isBaseRoute = pathname === "/";

    return(
        <div className="footer-container">
            <div className="back-button">
                <Link href="/">
                    <Image className={isBaseRoute ? 'arrow inactive' : 'arrow'} src={Arrow} width={30} height={24} alt="oops"/>
                </Link>
                
            </div>
            <span>©FUJI MEDIA 2025</span>
            <div className="light-dark-container">
                <Image src={Night} width={24} height={24} alt="oops"/>
            </div>
        </div>
    )
}