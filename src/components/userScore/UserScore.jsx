import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserScore } from "../../store/actions/optionsActions";
import { debounce } from 'throttle-debounce';

import Slider from '@material-ui/core/Slider';

export const UserScore = () => {
    const dispatch = useDispatch();

    const { userScore } = useSelector(({ options: { userScore } }) => ({
        userScore
    }))

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
        dispatch(setUserScore(newValue))
    });

    return (
        <div>
            <span>User Score</span>
            <Slider
                value={userScore}
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