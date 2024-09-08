import clsx from 'clsx';
import {useContext} from 'react';
import {ShowSavedContext} from '../lib/contexts.tsx';

//Setting Tabs component to fixed tables latest and starred. This can be extended if needed.

const Tabs = () => {
    const showContext = useContext(ShowSavedContext);
    return (
        <span className={'pt-[5px]'}>
            <button onClick={() => showContext?.handleShow(false)} className={clsx('font-openSansBold text-sm', {
            'font-openSansExtraBold': !showContext?.show,
            'text-hacker-orange': !showContext?.show})}>latest</button> | <button onClick={() => showContext?.handleShow(true)} className={clsx('font-openSansBold text-sm',
            {'font-openSansExtraBold': showContext?.show, 'text-hacker-orange': showContext?.show})}>starred</button>
        </span>
    )
}

export default Tabs;
