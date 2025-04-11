import Image from "next/image";
import { getClientsEntries } from "@/utils/contentful";
import Instagram from '@/../public/images/Instagram.png';
import Twitch from '@/../public/images/Twitch.png';
import Youtube from '@/../public/images/Youtube.png';
import './clients.css';

export default async function Clients(){
    const data = await getClientsEntries();
    const filteredData = data.items[0].fields.client;
    // console.log(filteredData);
    return(
        <div className="clients-page">
        <div className="clients-container">
            {
                filteredData.map((client, index) => {
                    console.log(client.fields);
                    return(
                        <div key={index} className="card-container">
                            <div className="image">
                                <Image src={"https:" + client.fields.clientImage.fields.file.url} width={client.fields.clientImage.fields.file.details.image.width} height={client.fields.clientImage.fields.file.details.image.height} alt="oops"/>
                            </div>
                            <div className="description">
                                <span className="client-name">{client.fields.clientName}</span>
                                {/* {
                                    client.fields.timeline &&
                                    <span className="timeline">
                                        {client.fields.timeline[0]} - {client.fields.timeline[1]}
                                    </span>
                                } */}
                                {/* <span className="followers">Followers: <span className="red">{client.fields.followers[0]}</span> &gt; <span className="green">{client.fields.followers[1]}</span></span>
                                <span className="views">Views: <span className="red">{client.fields.views[0]}</span> &gt; <span className="green">{client.fields.views[1]}</span></span>
                                <span className="watchtime">Watchtime: <span className="red">{client.fields.watchTime[0]}</span> &gt; <span className="green">{client.fields.watchTime[1]}</span></span> */}
                                <div className="socials">
                                    <span className="socials-header">Managed Socials</span>
                                    <div className="social-logos">

                                        <a href={client.fields.twitchLink}><Image src={Twitch} width={24} height={24} alt="oops"/></a>
                                        <a href={client.fields.instagramLink}><Image src={Instagram} width={24} height={24} alt="oops"/></a>
                                        <a href={client.fields.youtubeLink}><Image src={Youtube} width={24} height={24} alt="oops"/></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}