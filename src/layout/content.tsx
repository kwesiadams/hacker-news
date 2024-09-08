import {Container} from './container.tsx';
import {ReactNode, useRef} from 'react';
import {ChevronUpIcon} from '@heroicons/react/24/outline';

const buttonStyle = `
    flex
    items-center
    justify-center 
    sticky 
    top-[90%]
    float-right
    border-gray-300 
    hover:border-hacker-orange 
    hover:opacity-70 
    h-10 w-10 
    z-10
    rounded-full border-4
`

const Content = ({
                     children,
                 }: Readonly<{
    children: ReactNode;
}>) => {
    const mainRef = useRef<HTMLDivElement>(null);
    return (
        <Container>
            <div ref={mainRef} className={'h-[calc(100dvh-337px)] relative overflow-scroll scrollbar-hide'}>
                <button onClick={() => mainRef.current.scrollTo({top: 0, behavior: 'smooth'})}
                        className={buttonStyle}>
                    <ChevronUpIcon className={'size-6 text-gray-500 hover:text-hacker-orange stroke-[3]'}></ChevronUpIcon></button>
                    {children}
            </div>
        </Container>
    )
}

export default Content;

