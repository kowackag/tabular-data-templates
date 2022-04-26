export const getFilteredItems = (arr, searchData) => {
    const copyArr = arr.filter(({col_2, col_3, col_4, col_5}) => 
        col_2.toUpperCase().includes(searchData.col_2.trim().toUpperCase()) 
        && col_3.toUpperCase().includes(searchData.col_3.trim().toUpperCase()) 
        && col_4.toUpperCase().includes(searchData.col_4.trim().toUpperCase()) 
        && col_5.toString().includes(searchData.col_5.trim()));
    return copyArr;
}

export const getItemsWithPhrase = (arr, phrase) => {
    const copyArr = arr.filter(({col_2, col_3, col_4, col_5})=>
        col_2.toUpperCase().includes(phrase.toUpperCase())
        || col_3.toUpperCase().includes(phrase.toUpperCase()) 
        || col_4.toUpperCase().includes(phrase.toUpperCase()) 
        || col_5.toString().toUpperCase().includes(phrase.toUpperCase()));
    return copyArr;
}

export const sortItems = (arr, element) => {
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

export const getCopyData = (db) => {
    const copyDb = [...db].map(({a,b,c,d,e})=>{
        return {
            id: a,
            col_2: b,
            col_3: c,
            col_4: d.join(", "),
            col_5: e
        }
    });
    return copyDb;
}
