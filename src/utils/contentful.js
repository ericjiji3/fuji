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