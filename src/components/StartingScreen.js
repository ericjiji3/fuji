'use client';
import Logo from '@/../public/images/fuji-logo.png';
import Image from 'next/image';
import './StartingScreen.css';
import { useState, useEffect } from 'react';

export default function StartingScreen(){
    const [clicked, setClicked] = useState(false);

    return(
        <div className={clicked ? 'starting-container inactive' : 'starting-container'} onClick={() => setClicked(true)}>
            <span className="copyright">©fuji media 2025</span>
            <Image src={Logo} width={150} height={100} alt="oops"/>
            <span className='start-text'>Press Start</span>
        </div>
    )
}