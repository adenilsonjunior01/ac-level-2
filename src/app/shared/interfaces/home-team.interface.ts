import { GoalsInterface } from './goals-interface';

export interface HomeTeamInterface {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: GoalsInterface;
}
