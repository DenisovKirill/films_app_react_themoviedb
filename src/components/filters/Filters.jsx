import React from 'react';

import { Genres } from "../genres/Genres";
import { UserScore } from '../userScore/UserScore';
import { DatePicker } from '../datePicker/DatePicker';

import './Filters.css';


export const Filters  = () => {
  return (
    <div className='filters'>
        <span className='filters__title'>Filters</span>
        <Genres />
        <UserScore />
        <DatePicker />
    </div>
  )
};
