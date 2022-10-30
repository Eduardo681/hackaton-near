export default function formatDate(date) {
    const dateRight = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateFixed = dateRight
        .toString()
        .padStart(2, '0');

    const monthFixed = month
        .toString()
        .padStart(2, '0');

    return `${dateFixed}/${monthFixed}/${year}`
}