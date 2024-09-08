import moment from 'moment';

export const timeTillNow = (postTime: number): string => {
    const date1 = moment(Date.now());
    const date2 = moment(new Date(postTime * 1000));
    const years = date1.diff(date2, 'years')
    const months = date1.diff(date2, 'months');
    const weeks = date1.diff(date2, 'weeks');
    const days = date1.diff(date2, 'days');
    const hours = date1.diff(date2, 'hours');
    const minutes = date1.diff(date2, 'minutes');
    const seconds = date1.diff(date2, 'seconds');

    if(years){
        return `${years} ${years > 1 ? ' years' : ' year'}`
    }
    if(months){
        return `${months} ${months > 1 ? ' months' : ' month'}`
    }
    if(weeks){
        return `${weeks} ${weeks > 1 ? ' weeks' : ' week'}`
    }
    if(days){
        return `${days} ${days > 1 ? ' days' : ' day'}`
    }
    if(hours){
        return `${hours} ${hours > 1 ? ' hours' : ' hour'}`
    }
    if(minutes){
        return `${minutes} ${minutes > 1 ? ' minutes' : ' minute'}`
    }
    if(seconds){
        return `${seconds} ${seconds > 1 ? ' seconds' : ' second'}`
    }
}
