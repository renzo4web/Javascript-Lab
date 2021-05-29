import view from "../Utils/view";

export async function Stories(path) {
    const stories = await getStories(path).catch(console.warn);
    view.innerHTML = `<div>${stories}</div>`;
}

const getStories = async (path) => {
    let queryPath = '';
    switch (path) {
        case '/':
            queryPath = "newstories";
            break;
        case '/top' :
            queryPath = "topstories";
            break;
        case '/new' :
            queryPath = "newstories";
            break;
        case '/ask' :
            queryPath = "askstories";
            break;
        case '/show' :
            queryPath = "showstories";
            break;

    }

    const idStories = await fetch(`https://hacker-news.firebaseio.com/v0/${queryPath}.json`);
    const ids = await idStories.json();


    const promises = await Promise.all(ids.slice(0, 50).map(id => fetch(` https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)));
    const results = await Promise.all(promises.map(promise => promise.json()));

    console.log(results);
};