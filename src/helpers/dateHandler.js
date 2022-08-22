export const getDateFromString = (date) => {
    let [month, day, year] = date.split('-');
    return new Date(paseInt(month), paseInt(day), parseInt(year))
}