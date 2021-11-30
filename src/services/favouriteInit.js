export const favouriteInit = (id) =>{

    const storageFilms = localStorage.getItem('favoriteInStorage');

    if (!localStorage.getItem('favoriteInStorage')) {
        localStorage.setItem('favoriteInStorage', JSON.stringify([]));
    };

    let fav = [...JSON.parse(storageFilms ?  storageFilms : JSON.stringify([]))];

    if (!fav.some(value => id === value)) {
        fav = [...fav, id];
    } else {
        fav = fav.filter(item => item !== id);
    }

    console.log(fav);

    localStorage.setItem('favoriteInStorage', JSON.stringify(fav));
};