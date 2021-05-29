import view from "../Utils/view";
import {Story} from "../components/Story";

export async function Item() {
    const [, id] = window.location.hash.split('?id=');

    const comments = await getSingleStoryComments(id).catch(console.warn);
    const story = await getStory(id);

    view.innerHTML = `<div>

<div>
${Story(story)}
</div>

            ${comments.map(comments => {
        const {author, comment_text, created_at} = comments;
        return `
            <div>${author}</div>
           <div>${comment_text}</div>
           <div>${created_at}</div>
                `;
    }).join('')}
        
</div>`;
}

const getSingleStoryComments = async (id) => {
    const resp = await fetch(`https://hn.algolia.com/api/v1/search?tags=comment,story_${id}`);
    const {hits} = await resp.json();
    return hits;
};

const getStory = async (id) => {

    try {
        const resp = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const story = await resp.json();
        return story;
    } catch (e) {
        console.warn(e);
    }
};