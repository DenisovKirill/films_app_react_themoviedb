import React,  { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAboutInfo } from "../../store/actions/aboutActions";
// import { FilmCard } from "../filmCard/FilmCard";
import { getData } from "../../services/getData";
// import { setFavourite } from "../../store/actions/favouriteActions";

export const FavouriteContainer = () => {
    // const dispatch = useDispatch();

    // const { favouritesInfo } = useSelector(({ favourite: { favouritesInfo }}) => ({
    //     favouritesInfo
    // }));

    const favIds = JSON.parse(localStorage.getItem('favoriteInStorage'));

    let favorites = [];

    const favArr = favIds.map(async (item) => await getData(`https://api.themoviedb.org/3/movie/${item}?api_key=8e526a58ae4ed5fe38e95586eb468e63`));

    Promise.all(favArr)
    .then(responses => {
        for(let response of responses) {
            console.log(response)
            favorites.push(responses)
        }
    })

    console.log(favorites)

    // useEffect(() => {
    //     dispatch(setFavourite(favorites))
    // }, [favouritesInfo])

    
    return (
        <div>
            Favourite
            {/* {renderFavourite()} */}
        </div>
    )
};