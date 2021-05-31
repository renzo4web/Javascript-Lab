import {getDomain, parseTimestamp} from "../Utils/view";

export const Story = (story) => {
    const {
        index,
        url,
        title,
        points,
        user,
        time: timestamp,
        id,
        domain,
        time_ago,
        comments_count,
        isFavorite
    } = story;
    return `<div tabindex="${index - 1}" class="story" >
<div>
 <span class="gray">${index ? index : ""}</span>.<span class="upvote">▲</span>
 <a href="${url}">${title}</a>
 <span>(${domain})</span>  
</div>

<div>
    <div class="gray">
        ${points} points by ${user} ${time_ago}
        |
        <a data-navigo href="/#item?id=${id}">
        ${comments_count}
        </a>
        |
        <span data-story='${JSON.stringify(story)}' class="favorite">
        <img class="heart" alt="add to favorites" src="https://microicon-clone.vercel.app/heart/ccc">
        ${isFavorite ? "Remove From Favorite" : "Add to Favorite"}
</span>
</div>
</div>
             
            </div>`;
};