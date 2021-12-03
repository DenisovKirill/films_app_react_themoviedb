import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { setFavourite } from "../../store/actions/favouriteActions";
import { spawnFilms } from "../../services/spawnFilms";

export const FavouriteContainer = () => {
    const dispatch = useDispatch();
    const { favouritesInfo } = useSelector(({ favourite: { favouritesInfo }}) => ({
        favouritesInfo
    }));

    useEffect(() => {
        dispatch(setFavourite());

    }, [favouritesInfo]);

    return (
        <div>
            <Grid container>
                {spawnFilms(favouritesInfo)}
            </Grid>
        </div>
    )
};
