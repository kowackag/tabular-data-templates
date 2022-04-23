export const getFilteredFilms = (arr, searchData) => {
    const copyArr = arr.filter(({title, genre, year, performance}) => 
        title.toUpperCase().includes(searchData.title.trim().toUpperCase()) 
        && genre.toUpperCase().includes(searchData.genre.trim().toUpperCase()) 
        && performance.join(',').toUpperCase().includes(searchData.performance.trim().toUpperCase()) 
        && year.toString().includes(searchData.year.trim()));
    return copyArr;
}