import { getEntry } from "@/utils/contentful";
import Image from "next/image";

export default async function Socials(props){
    const data = await getEntry(props.id);
    console.log(data);

    return(
        <a href={data.fields.socialMediaLink} target="_blank">
            <Image src={"https:" + data.fields.socialMediaIcon.fields.file.url} width={24} height={24} alt="oops"/>
        </a>
    )
}
