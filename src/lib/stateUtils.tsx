export const savedItems = () => localStorage.getItem('savedItems') ? localStorage.getItem('savedItems')?.split(',') : [];
export const prevEndOffset = () => sessionStorage.getItem('prevEndOffset') ? +sessionStorage.getItem('prevEndOffset'): 0;
export const prevStarredEndOffset = () => sessionStorage.getItem('prevStarredEndOffset') ? +sessionStorage.getItem('prevStarredEndOffset'): 0;
export const seenItems = () => localStorage.getItem('seenItems') ? localStorage.getItem('seenItems')?.split(',') : [];
