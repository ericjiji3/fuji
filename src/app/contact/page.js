import { getContactEntries } from "@/utils/contentful";
import ContactForm from "@/components/Contact";

import './contact.css';




export default async function Contact(){
    var data = await getContactEntries();
    console.log(data.items[0].fields.header);
    var header = data.items[0].fields.header;
    var description = data.items[0].fields.description;
    console.log(data.items[0].fields.description);
    return(
        <div className="contact-container">
            <ContactForm header={header} description={description}/>
        </div>
    )
}