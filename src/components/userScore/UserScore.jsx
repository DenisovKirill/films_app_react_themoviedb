import React from "react";
import { useDispatch } from "react-redux";
import { setUserScore } from "../../store/actions/optionsActions";
import { debounce } from 'throttle-debounce';

import Slider from '@material-ui/core/Slider';

export const UserScore = () => {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState([0, 10]);

    const marks = [
        {
            value: 0,
            label: 0
        },
        {
            value: 5,
            label: 5
        },
        {
            value: 10,
            label: 10
        }
    ];

    const userScoreChange = debounce(500, (_, newValue) => {
        setValue(newValue);
        dispatch(setUserScore(newValue))
        console.log(value)
    });

    return (
        <div>
            <span>User Score</span>
            <Slider
                value={value}
                onChange={userScoreChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={1}
                marks={marks}
                min={0}
                max={10}
            />
        </div>
    )
}