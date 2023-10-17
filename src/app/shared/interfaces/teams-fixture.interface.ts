import { AwayFixtureInteface } from './away-fixture.interface';
import { HomeFixtureInterface } from './home-fixture.interface';

export interface TeamsFixtureInterface {
  home: HomeFixtureInterface;
  away: AwayFixtureInteface;
}
