import { parseISO, format } from 'date-fns';


// Format dates to ISO
export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
