import {getDomain, parseTimestamp} from "../Utils/view";

export const Story = (story) => {
    const {index,
        url,
        title,
        score,
        by: user,
        time: timestamp,
        id,
        descendants
    } = story;
    return `<div tabindex="${index - 1}" class="story" >
<div>
 <span class="gray">${index}</span>.<span class="upvote">▲</span>
 <a href="${url}">${title}</a>
 <span>(${url && getDomain(url)})</span>  
</div>

<div>
    <div class="gray">
        ${score} points by ${user} ${parseTimestamp(timestamp)}
        |
        <a data-navigo href="/#item?id=${id}">
        ${descendants}
        </a>
        |
        <span class="favorite">
        <img class="heart" alt="add to favorites" src="https://microicon-clone.vercel.app/heart/ccc">
        Add to Favorites
</span>
</div>
</div>
             
            </div>`;
};