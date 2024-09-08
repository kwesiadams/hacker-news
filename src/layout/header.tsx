import {Container} from './container.tsx';
import hackerNews from '../assets/icons/hackerNews.svg';
import moon from '../assets/icons/moon.svg';
import Tabs from '../components/tabs.tsx';

const Header = () => {
    return (
        <header>
            {/*TODO replace border color with theme color*/}
            <div className={'bg-hacker-orange w-dvw h-1'}></div>
            <Container>
                <div className={'flex items-center justify-between py-[49px]'}>
                    <div className={'flex items-center'}>
                        <img src={hackerNews} alt={'Hacker News'} className={'mr-9'}></img>
                        <Tabs></Tabs>
                    </div>
                    <button className={'pt-[5px]'}>
                        <img src={moon} alt={'Dark Mode'}/>
                    </button>
                </div>
            </Container>
        </header>

    )
}
export default Header;
