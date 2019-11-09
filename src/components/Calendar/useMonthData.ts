import { useState } from 'react';
import {
  startOfMonth,
  startOfWeek,
  addDays,
  isSameMonth,
  addMonths,
  subMonths
} from 'date-fns';

import { IMonth } from './Month/types';
import { IWeek } from './Week/types';
import { IDay } from './Day/types';

export const useMonthData = (
  initialDate: Date | number
): {
  activeDate: Date | number;
  monthData: IMonth;
  setNextMonth: () => void;
  setPrevMonth: () => void;
} => {
  const [activeDate, setActiveDate] = useState(initialDate);

  const calculateMonthData = (): IMonth => {
    const firstDayInMonth = startOfMonth(activeDate);
    const firstDayInWeek = startOfWeek(firstDayInMonth).getTime();

    const weeks: IWeek[] = Array.from(Array(6).keys()).map(weekIdx => {
      const week: IWeek = {
        days: Array.from(Array(7).keys()).map(dayIdx => {
          const msDate = addDays(
            firstDayInWeek,
            weekIdx * 7 + dayIdx
          ).getTime();

          const day: IDay = {
            msDate,
            tasks: [],
            isInMonth: isSameMonth(msDate, activeDate)
          };

          return day;
        })
      };

      return week;
    });

    const monthData: IMonth = {
      weeks
    };

    return monthData;
  };

  const setNextMonth = (): void => {
    setActiveDate(currentDate => addMonths(currentDate, 1));
  };

  const setPrevMonth = (): void => {
    setActiveDate(currentDate => subMonths(currentDate, 1));
  };

  return {
    activeDate,
    monthData: calculateMonthData(),
    setNextMonth,
    setPrevMonth
  };
};
