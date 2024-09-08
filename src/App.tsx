import {useCallback, useMemo, useState} from 'react';
import useSWR from 'swr';
import Header from './layout/header.tsx';
import Footer from './layout/footer.tsx';
import Content from './layout/content.tsx';
import NewsList from './news/news-list.tsx';
import Loading from './components/loading.tsx';
import {createUrlItems, NEW_STORIES} from './lib/urls.tsx';
import {fetcher} from './lib/data-fetching.tsx';
import {prevEndOffset, prevStarredEndOffset, savedItems} from './lib/stateUtils.tsx';
import {SavedContext, ShowSavedContext} from './lib/contexts.tsx';
const PAGE_INTERVAL = 8;

const determineEnd = (values: number[], prevOffset: number) =>  {
    return values.length > (prevOffset + PAGE_INTERVAL) ? (prevOffset + PAGE_INTERVAL) : values.length;
}

function App() {
    const {data} = useSWR(NEW_STORIES, fetcher);
    const [pagination, setPagination] = useState({prevEndOffset: prevEndOffset(), prevStarredEndOffset:prevStarredEndOffset()});
    const [saved, setSaved] = useState<string[]>(savedItems());
    const [showSaved, setShowSaved] = useState(false);
    let appContent;

    if(data){
        if(!showSaved){
            const currentIds = (data as number[]).slice(0, determineEnd(data, pagination.prevEndOffset));
            const current: {id: number, url: string}[] = createUrlItems(currentIds);
            appContent = <NewsList current={current}></NewsList>
        } else {
            const currentIds = (saved as number[]).slice(0, determineEnd(data, pagination.prevStarredEndOffset));
            const current: {id: number, url: string}[] = createUrlItems(currentIds);
            appContent = <NewsList current={current}></NewsList>
        }
    } else {
        appContent = <div className={'flex items-center justify-center h-[500px]'}><Loading/></div>;
    }

    // Handler sets the pagination object in session storage to be able to persist pagination offsets
    const handlePagination = useCallback(() => {
        setPagination(pg => {
            if(!showSaved){
                const end = determineEnd(data, pagination.prevEndOffset)
                sessionStorage.setItem('prevEndOffset', end.toString());
                return {...pg, prevEndOffset: end}
            } else {
                const end = determineEnd(data, pagination.prevStarredEndOffset)
                sessionStorage.setItem('prevStarredEndOffset', end.toString());
                return {...pg, prevStarredEndOffsetOffset: end}
            }

        });
    }, [setPagination, showSaved, data, pagination]);

    const handleSaved = useCallback((id: number, isSaved: boolean) => {
        if(!isSaved){
            setSaved((svd: string[]): string[] => {
                localStorage.setItem('savedItems', svd.length ? `${svd.join(',')},${id.toString()}`: id.toString());
                return [...svd, id.toString()];
            })
        } else {
            setSaved((svd: string[]): string[] => {
                const filtered = svd.filter(val => val !== id.toString());
                localStorage.setItem('savedItems', filtered.join(','));
                return filtered;
            })
        }
    },[setSaved]);

    const savedContextProvider = useMemo(() => {
       return {saved: saved, handleSaved:handleSaved}
    }, [saved, handleSaved]);

    const showSavedProvider = useMemo(() => {
        return {show: showSaved, handleShow:(isShown: boolean) => setShowSaved(isShown)}
    }, [showSaved, setShowSaved])


    return (
        <div className={'overflow-hidden, scrollbar-hide'}>
            <ShowSavedContext.Provider value={showSavedProvider}>
                <Header/>
                <Content>
                    <SavedContext.Provider value={savedContextProvider}>
                        {appContent}
                    </SavedContext.Provider>
                </Content>
                <Footer onPaginate={handlePagination}></Footer>
            </ShowSavedContext.Provider>
        </div>
    )
}

export default App;
