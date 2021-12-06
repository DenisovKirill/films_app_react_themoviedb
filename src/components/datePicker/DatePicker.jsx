import React from "react";
import { useDispatch, useSelector } from "react-redux";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker  } from '@material-ui/pickers';

import { setReleaseDateFrom, setReleaseDateTo } from "../../store/actions/optionsActions";

export const DatePicker = () => {
    const dispatch = useDispatch();
    const { releaseDateFrom, releaseDateTo } = useSelector(({ options: { releaseDateFrom, releaseDateTo } }) => ({
        releaseDateFrom,
        releaseDateTo
    }));

    const handleDateChangeFrom = (date) => {
        const shortDate = date.toISOString().split('T')[0];
        dispatch(setReleaseDateFrom(shortDate));
    };

    const handleDateChangeTo = (date) => {
        const shortDate = date.toISOString().split('T')[0];
        dispatch(setReleaseDateTo(shortDate));
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={releaseDateFrom}
                onChange={handleDateChangeFrom}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={releaseDateTo}
                onChange={handleDateChangeTo}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
};
