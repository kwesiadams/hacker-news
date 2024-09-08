export const fetcher = (input: RequestInfo | URL, init?: RequestInit) => fetch(input, init).then(r => r.json());
export const fetcherAll = (urls: string[]) => Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
