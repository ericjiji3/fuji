import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import About from '@/../public/images/about-icon.png';
import Contact from '@/../public/images/contact-icon.png';
import Work from '@/../public/images/work-icon.png';
import Client from '@/../public/images/clients-icon.png';


export default function Home() {
  return (
    <div className="home-container">
      <div className="links-container">
          <Link href="/clients"  className="link-container">
            <div className="image-container">
              <Image src={Client} width={285} height={285} alt="oops"/>
            </div>
            <span>CLIENTS</span>
          </Link>

          <Link href="/contact" className="link-container">
            <div className="image-container">
              <Image src={Contact} width={285} height={285} alt="oops"/>
            </div>
            <span>CONTACT</span>
          </Link>

          <Link href="/work" className="link-container">
            <div className="image-container">
              <Image src={Work} width={250} height={250} alt="oops"/>
            </div>
            <span>WORK</span>
          </Link>

          <Link href="/about" className="link-container">
            <div className="image-container">
              <Image src={About} width={285} height={285} alt="oops"/>
            </div>
            <span>ABOUT</span>
          </Link>
          
      </div>
    </div>
  );
}
