import {createContext} from 'react';
export const SavedContext = createContext<{saved: string[], handleSaved:(id: number, isSaved: boolean) => void}>(null);
export const ShowSavedContext = createContext<{show: boolean, handleShow: (boolean) => void} | null>(null);
