import React,  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setAboutInfo } from "../../store/actions/aboutActions";
// import { FilmCard } from "../filmCard/FilmCard";
// import { getData } from "../../services/getData";
// import { setFavourite } from "../../store/actions/favouriteActions";

export const FavouriteContainer = () => {
    // const dispatch = useDispatch();

    // const { favouritesInfo } = useSelector(({ favourite: { favouritesInfo }}) => ({
    //     favouritesInfo
    // }));

    // const favIds = JSON.parse(localStorage.getItem('favoriteInStorage'));

    // let favorites = [];

    // favIds.map(async (item) => await getData(`https://api.themoviedb.org/3/movie/${item}?api_key=8e526a58ae4ed5fe38e95586eb468e63`));



    // console.log(favIds)

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