export const getFilteredFilms = (arr, searchData) => {
    const copyArr = arr.filter(({title, genre, year, performance}) => 
        title.toUpperCase().includes(searchData.title.trim().toUpperCase()) 
        && genre.toUpperCase().includes(searchData.genre.trim().toUpperCase()) 
        && performance.join(',').toUpperCase().includes(searchData.performance.trim().toUpperCase()) 
        && year.toString().includes(searchData.year.trim()));
    return copyArr;
}

export const getFilmsWithPhrase = (arr, phrase) => {
    const copyArr = arr.filter(({title, genre, year, performance})=>
        title.toUpperCase().includes(phrase.toUpperCase())
        || genre.toUpperCase().includes(phrase.toUpperCase()) 
        || performance.join(',').toUpperCase().includes(phrase.toUpperCase()) 
        || year.toString().toUpperCase().includes(phrase.toUpperCase()));
    return copyArr;
}

export const sortFilms = (arr, element) => {
    const sortUp = (property) => (a,b) => {
        return a[property].toString().localeCompare(b[property].toString());
    }
    const sortDown = (property) => (a,b) => {
        return b[property].toString().localeCompare(a[property].toString());
    }
    switch (element.type) {
        case "up": {
            return arr.sort(sortUp(element.name))
        }
        case "down": {
            return arr.sort(sortDown(element.name))
        }
        default: {
            return arr;
        }
    }
}