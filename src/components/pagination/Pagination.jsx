import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@material-ui/lab/Pagination';

import { setPage } from "../../store/actions/optionsActions";

export const FilmsPagination = () => {
    const dispatch = useDispatch();
    const {  total_pages, page } = useSelector(({ filmsInfo: { total_pages }, options: { page } }) => ({
        total_pages,
        page
    }));

    const handlePage = (_, value) => {
        dispatch(setPage(value))
    };

    return (
        <>
        { total_pages > 0 && <Pagination
            page={page}
            count={total_pages}
            color="primary"
            onChange={handlePage}/>}
        </>
    )
};
