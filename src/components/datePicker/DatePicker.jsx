import React, {useState} from "react";
// import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';

// import { setReleaseDatesRange } from "../../store/actions/optionsActions";

export const DatePicker = () => {
    // const dispatch = useDispatch();

    let now = new Date();
    const [selectedDate, setSelectedDate] = useState(now);

    const handleDateChange = ({ target: { value } }) => {
        setSelectedDate(value);
        console.log(selectedDate)
      };

      return (
        <div>
            <form noValidate>
                <TextField
                    id="date"
                    onChange={handleDateChange}
                    label="From release date"
                    type="date"
                    defaultValue="2010-01-01"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
                <TextField
                    id="date"
                    label="To release date"
                    type="date"
                    defaultValue="2021-11-24"
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </form>
        </div>
      )
}