import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilms } from "../../store/actions/filmsActions";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";

const initialUrl = 'https://api.themoviedb.org/3/search/movie?api_key=8e526a58ae4ed5fe38e95586eb468e63&query='

export const Films = () => {
    const dispatch = useDispatch();
    const {films} = useSelector(({ myFilms: { films } }) => ({
        films
    }));

    const [query, setQuery] = useState('');

    const queryFromInput = ({ target: { value } }) => {
        setQuery(value)
    }

    const getFilms = async (value = 'star') => {
        const data = await fetch(`${initialUrl}${value}`);
        const formattedData = await data.json();

        dispatch(setFilms(formattedData.results))
    };

    useEffect(() => {
        getFilms()
    }, [query])

    const searchFilms = () => {
        getFilms(query)
    }

    const renderFilms = () => {
        return films.map(item => {
            const imgUrl = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
            return (
                <React.Fragment key={item.id}>
                    <img src={imgUrl} alt='' width='300px'></img>
                </React.Fragment>
            )
        })
    }

    return(
        <div>
            <Input value={query} onChange={queryFromInput} />
            <Button text='Render films' onClick={searchFilms} />
            <div>
                {renderFilms()}
            </div>
        </div>
    )
}