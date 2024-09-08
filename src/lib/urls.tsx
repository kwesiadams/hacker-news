export const NEW_STORIES = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

export const createUrlItems = (ids: number[]): {id: number, url: string}[] => {
    return ids.map(id => {
        return {id, url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`}
    });
}
