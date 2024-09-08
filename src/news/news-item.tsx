import {HackerNewsItem} from '../lib/types.ts';
import {timeTillNow} from '../lib/utils.ts';
import {StarIcon} from '@heroicons/react/24/outline';
import {StarIcon as StarIconSolid} from '@heroicons/react/24/solid';
import clsx from 'clsx';
import {useContext} from 'react';
import {SavedContext} from '../lib/contexts.tsx';

const NewsItem = ({seen, onSeen, index, data}: {
    seen: boolean,
    onSeen: (id: number) => void,
    index: number,
    data: HackerNewsItem}) => {
    const domain = data.url ? new URL(data.url): null;
    const savedContext = useContext(SavedContext);
    const saved = savedContext.saved.includes(data.id.toString());
    const onSave = savedContext.handleSaved;
    return (
        <div className={'flex items-baseline space-x-6'}>
           <span className={'font-ubuntuMonoRegular text-[18px] opacity-50'}>
               {index + 1}.
           </span>
            <div className={'flex flex-col space-y-1.5 items-start mb-[26px]'}>
                <div className={'flex items-baseline'}>
                    <a className={clsx('font-ubuntuMonoBold text-[18px] leading[18px] hover:opacity-60', {'text-gray-400': seen})}
                       href={data?.url} target={'_blank'} onClick={() => onSeen(data.id)}>
                        {data?.title}
                    </a>
                    <span
                        className={'ml-3 font-openSansRegular text-[10px] opacity-50 text-gr'}>{domain ? `(${domain.hostname.replace('www.', '')})` : ''}</span>
                </div>
                <div className={'flex items-center font-openSansRegular text-[10px]'}>
            <span className={'opacity-50'}>
                {`${data?.score} point${+data?.score === 1 ? '' : 's'} by ${data?.by} 
            ${data?.time ? timeTillNow(data.time) + ' ago' : ''} | ${data?.descendants} 
            comment${data?.descendants === 1 ? '' : 's'} |`}
            </span>
                    <span className={'ml-0.5'}>
                <StarIcon className={clsx('size-2.5', {'hidden': savedContext.saved.includes(data.id.toString())})}></StarIcon>
                <StarIconSolid className={clsx('size-2.5 text-hacker-orange', {'hidden': !saved})}></StarIconSolid>
            </span>
                    <button className={'flex items-center ml opacity-50 hover:opacity-100'}
                            onClick={() => onSave(data.id, saved)}>
                        <span className={'ml-0.5'}>{saved ? 'saved' : 'save'}</span>
                    </button>
                </div>
            </div>
        </div>
    );

}
export default NewsItem;
