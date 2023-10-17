import { LeaguesInterface } from '../interfaces';

export class Leagues {
  /**
   * @todo: ID's version 3
   */
  public static teams(): LeaguesInterface[] {
    return [
      {
        id: 39,
        league: 39,
        index: 0,
        country: 'England',
        leagueName: 'Premier League',
        season: 2023,
        selected: false,
      },
      {
        id: 140,
        league: 140,
        index: 1,
        country: 'Spain',
        leagueName: 'La Liga',
        season: 2023,
        selected: true,
      },
      {
        id: 61,
        league: 61,
        index: 2,
        country: 'France',
        leagueName: 'Ligue 1',
        season: 2023,
        selected: false,
      },
      {
        id: 78,
        league: 78,
        index: 3,
        country: 'Germany',
        leagueName: 'Bundesliga',
        season: 2023,
        selected: false,
      },
      {
        id: 135,
        league: 135,
        index: 4,
        country: 'Italy',
        leagueName: 'Serie A',
        season: 2023,
        selected: false,
      },
    ];
  }

  public static statisticsTeam(): any[] {
    return [
      {
        id: 1,
        mainTeam: 'Liverpool',
        scoreboardMainTeam: 2,
        logoMainTeam: 'Liv',
        visitingTeam: 'Aston Villa',
        logoVisitingTeam: 'Ast',
        scoreboardVisitingTeam: 1,
      },
    ];
  }
}
