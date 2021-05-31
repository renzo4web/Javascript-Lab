import view from "../Utils/view";
import {Story} from "../components/Story";
import {Comment} from "../components/Comment";

export async function Item() {
    const [, id] = window.location.hash.split('?id=');

    const story = await getStory(id);
    const {comments} = story;

    if (!comments) {
        view.innerHTML = `<div class="error">Error fetching story</div>`;
        return;
    }

    console.log(comments);
    const hasComments = comments.length > 0;


    view.innerHTML = `<div>

                <div>
                    ${Story({...story, index: 1})}
            </div>
            <hr/>
        ${hasComments ? comments.map(Comment).join('') : "No Comments"}
</div>`;
}


const getStory = async (id) => {

    try {
        const resp = await fetch(`https://api.hackerwebapp.com/item/${id}`);
        const story = await resp.json();

        if (!story) {
            throw Error('Id Invalid');
        }

        return story;
    } catch (e) {
        console.warn(e);
    }
};