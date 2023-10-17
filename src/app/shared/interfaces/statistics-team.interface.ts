import { AllInfoInterface } from './all-info.interface';
import { AwaTeamInterface } from './away-team.interface';
import { HomeTeamInterface } from './home-team.interface';
import { TeamInterface } from './team-interface';

export interface StatisticsTeamInterface {
  rank: number;
  team: TeamInterface;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: AllInfoInterface;
  home: HomeTeamInterface;
  away: AwaTeamInterface;
  update: string;
}
