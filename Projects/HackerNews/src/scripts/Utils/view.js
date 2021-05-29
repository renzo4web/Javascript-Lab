export default document.querySelector('#router-outlet');

export const getDomain = (url) => {
    return url.split('//')[1].split("/")[0];
};

export const parseTimestamp = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US");
};