import {Container} from './container.tsx';
import Tabs from '../components/tabs.tsx';

const Footer = ({onPaginate}: {onPaginate: () => void}) => {
    return (
        <footer>
            <Container>
                <div>
                    <button onClick={onPaginate} className={'bg-hacker-orange hover:shadow-lg text-white px-4 py-[9px] m-10'}>show more</button>
                    <div
                        className={'flex flex-col items-center justify-center h-[80px] border-t-[2px] border-t-hacker-orange'}>
                        <div className={'mb-2 font-openSansBold text-base'}>Hacker News</div>
                        <Tabs></Tabs>
                    </div>
                </div>

            </Container>
        </footer>
    )
}

export default Footer;
