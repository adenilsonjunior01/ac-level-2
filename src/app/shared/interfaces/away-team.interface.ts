import { GoalsInterface } from './goals-interface';

export interface AwaTeamInterface {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: GoalsInterface;
}
