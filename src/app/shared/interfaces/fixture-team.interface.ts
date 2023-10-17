import { GoalsInterface } from './goals-interface';
import { LeagueInterface } from './league.interface';
import { ScoreInterface } from './score.interface';
import { TeamsFixtureInterface } from './teams-fixture.interface';

export interface FixtureTeamInterface {
  fixture: FixtureTeamInterface;
  league: LeagueInterface;
  teams: TeamsFixtureInterface;
  goals: GoalsInterface;
  score: ScoreInterface;
}
