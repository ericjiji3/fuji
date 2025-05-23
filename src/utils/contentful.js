import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const createContentClient = () => {
    return createClient({
        space: space,
        accessToken: accessToken,
    })
}
const client = createContentClient();

export const getClientsEntries = async () => {
    const entries = await client.getEntries({ content_type: "clients" });
    return entries;
};

export const getEntry = async (id) => {
    const entries = await client.getEntry(id);
    return entries;
};

export const getVideosEntries = async () => {
    const entries = await client.getEntries({ content_type: "videosPage" });
    return entries;
};

export const getAboutEntries = async () => {
    const entries = await client.getEntries({ content_type: "aboutPage" });
    return entries;
};

export const getContactEntries = async () => {
    const entries = await client.getEntries({ content_type: "contactPage" });
    return entries;
};