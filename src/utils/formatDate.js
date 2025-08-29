export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options).replace(/,/, '');
}
