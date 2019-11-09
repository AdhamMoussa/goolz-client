import React, { createContext } from 'react';
import { format } from 'date-fns';

import { useMonthData } from './useMonthData';

import Month from './Month';

import { ITask } from './Task/types';
import MonthHead from './MonthHead';

type TCalendarContext = {
  renderCustomDayView?: (
    msDate: number,
    tasks: ITask[],
    isInMonth: boolean
  ) => JSX.Element;
};

interface IProps {
  initialDate?: Date | number;
  renderCustomDayView?: TCalendarContext['renderCustomDayView'];
}

export const CalendarContext = createContext<TCalendarContext>({});

const Calendar: React.FC<IProps> = ({ initialDate, renderCustomDayView }) => {
  const { activeDate, monthData, setNextMonth, setPrevMonth } = useMonthData(
    initialDate || new Date()
  );

  return (
    <CalendarContext.Provider value={{ renderCustomDayView }}>
      <MonthHead
        title={format(activeDate, 'MMMM yyyy')}
        renderNextMonth={setNextMonth}
        renderPrevMonth={setPrevMonth}
      />

      <Month month={monthData} />
    </CalendarContext.Provider>
  );
};

export default Calendar;
