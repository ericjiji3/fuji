import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ClientButton from '@/../public/images/client-button.png';

export default function Home() {
  return (
    <div className="home-container">
      <div className="links-container">
          <div className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>CLIENTS</span>
          </div>
          <div className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>CONTACT</span>
          </div>
          <div className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>WORK</span>
          </div>
          <div className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>ABOUT</span>
          </div>
      </div>
    </div>
  );
}
