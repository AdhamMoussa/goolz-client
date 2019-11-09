import { ITask } from '../Task/types';

export interface IDay {
  msDate: number;
  tasks: ITask[];
  isInMonth: boolean;
}
