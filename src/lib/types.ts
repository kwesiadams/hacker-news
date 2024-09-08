export interface HackerNewsItem {
    id: number,
    by: string,
    kids?: number[],
    parent?: string,
    descendants: number,
    text?: string,
    parts?: number[],
    time: number,
    title?: string,
    type: string,
    url?: string,
    score?: number
}

