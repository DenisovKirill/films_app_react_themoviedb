import React from 'react';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Genres } from "../genres/Genres";
import { UserScore } from '../userScore/UserScore';
import { DatePicker } from '../datePicker/DatePicker';

import './Filters.css'


export const Filters  = () => {
  return (
    <div>
        <span className='filters-title'>Filters</span>
        <Genres />
        <UserScore />
        <DatePicker />
      {/* <Accordion className='filters-accordion'>
        <AccordionSummary
            className='filters-accordion-header'
            expandIcon={<ExpandMoreIcon />}
        >
            <span className='filters-title'>Filters</span>
        </AccordionSummary>
        <AccordionDetails className='filters-holder'>
            <Genres/>
        </AccordionDetails>

      </Accordion> */}
    </div>
  );
}



