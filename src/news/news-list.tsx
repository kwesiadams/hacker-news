import NewsItem from './news-item.tsx';
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import { seenItems} from '../lib/stateUtils.tsx';
import useSWR from 'swr';
import {fetcherAll} from '../lib/data-fetching.tsx';
import {HackerNewsItem} from '../lib/types.ts';

interface Props {
    current: {id: number, url: string}[]
}
const NewsList = ({current}: Props) => {
    const [seen, setSeen] = useState<string[]>(seenItems());
    const handleSeen = useCallback((id: number) => {
        setSeen((sn: string[]): string[] => {
            localStorage.setItem('seenItems', sn.length ? `${sn.join(',')},${id.toString()}`: id.toString());
            return [...sn, id.toString()];
        })
    },[setSeen]);
    const {data} = useSWR( current.map(val => val.url), fetcherAll);
    const endOfListRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        endOfListRef.current.scrollIntoView({behavior: 'smooth'});
    });
    return (
        <div className={'relative'}>
            {
                (data as HackerNewsItem[])?.map(((cur, index) => {
                    return (
                        <div key={cur.id}>
                            <NewsItem
                                      seen={seen?.includes(cur.id.toString())}
                                      onSeen={handleSeen}
                                      index={index}
                                      data={cur}>
                            </NewsItem>
                        </div>
                    )
                }))
            }
            <div ref={endOfListRef} className={'invisible text-hacker-orange -mt-[80px]'}>.</div>
        </div>
    )
}
export default memo(NewsList);
