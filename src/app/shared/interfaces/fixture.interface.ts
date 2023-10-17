import { PeriodsInterface } from './periods.interface';
import { StatusFixtureInterface } from './status-fixture.interface';
import { VenueInteface } from './venue.interface';

export interface FixtureInterface {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: PeriodsInterface;
  venue: VenueInteface;
  status: StatusFixtureInterface;
}
