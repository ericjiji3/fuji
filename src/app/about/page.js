import './about.css';
import { getAboutEntries } from '@/utils/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Link from 'next/link';
import Instagram from '@/../public/images/Instagram.png';
import Twitch from '@/../public/images/Linkedin.png';
import Youtube from '@/../public/images/Twitter.png';
import Image from 'next/image';

const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>,
      [MARKS.ITALIC]: (text) => <span className="italic">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 text-lg font-pp-light">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-3xl font-clash-regular mb-4 mt-8">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-2xl font-clash-regular mb-3 mt-6">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-6 mb-4 font-pp-light">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal ml-6 mb-4 font-pp-light">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="mb-2">{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote>{children}</blockquote>
      ),
      'embedded-asset-block': (node) => (
        <div className="my-8">
          <img 
            className="w-full" 
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.description || ''}
          />
        </div>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a 
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    }
  }


export default async function About(){
    var data = await getAboutEntries();
    var description = data.items[0].fields.description;
    console.log(data.items[0].fields.description);
    return(
        <div className='about-container'>
            <div className='description-container'>
            {documentToReactComponents(description,options)}  
            <div className='socials-container'>
                <a href="https://www.linkedin.com/company/fuji-digital-media?original_referer=https%3A%2F%2Fwww.google.com%2F" target='_blank'><Image src={Twitch} width={24} height={24} alt="oops"/></a>
                <a href="https://www.instagram.com/analytics/" target='_blank'><Image src={Instagram} width={24} height={24} alt="oops"/></a>
                <a href="https://x.com/fujimedia?lang=en" target='_blank'><Image src={Youtube} width={24} height={24} alt="oops"/></a>
            </div>
            </div>
            
        </div>
    )
}