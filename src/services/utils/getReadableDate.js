export const getReadableDate = function (dateInstance) {
    const day = dateInstance.getDay().toString();
    const month = dateInstance.getMonth().toString();
    return `${day.padStart(2, '0')} / ${month.padStart(2, '0')} / ${dateInstance.getFullYear()}`;
};
