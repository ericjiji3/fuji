import './work.css';
import { getVideosEntries } from '@/utils/contentful';


export default async function Work(){
    var data = await getVideosEntries();
    var videosInfo = data.items[0].fields.youtubeLink;
    return(
        <div className='work-container'>
        {
            videosInfo.map((video, index) => {
                var embedCode = video.match(/v=([\w-]{11})/);

                return(
                    <div className='video-container' key={index}>
                        
                        <iframe width="2114" height="843" src={"https://www.youtube.com/embed/" + embedCode[1]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                )
            })
        }
            
        </div>
    )
}