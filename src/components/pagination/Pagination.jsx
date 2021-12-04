import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@material-ui/lab/Pagination';

import { setPage } from "../../store/actions/optionsActions";

export const FilmsPagination = () => {
    const dispatch = useDispatch();
    const {  total_pages } = useSelector(({ filmsInfo: { total_pages } }) => ({
        total_pages
    }));

    const handlePage = (_, value) => {
        console.log(value);
        dispatch(setPage(value))
    };

    return (
        <>
        { total_pages > 0 && <Pagination
            count={total_pages}
            color="primary"
            onChange={handlePage}/>}
        </>
    )
}
