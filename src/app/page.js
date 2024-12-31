import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ClientButton from '@/../public/images/client-button.png';


export default function Home() {
  return (
    <div className="home-container">
      <div className="links-container">
          <Link href="/clients"  className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>CLIENTS</span>
          </Link>

          <Link href="/contact" className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>CONTACT</span>
          </Link>

          <Link href="/work" className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>WORK</span>
          </Link>

          <Link href="/about" className="link-container">
            <div className="image-container">
              <Image src={ClientButton} width={285} height={285} alt="oops"/>
            </div>
            <span>ABOUT</span>
          </Link>
          
      </div>
    </div>
  );
}
