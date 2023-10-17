import { GoalsInterface } from './goals-interface';

export interface AllInfoInterface {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: GoalsInterface;
}
