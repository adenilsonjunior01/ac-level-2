import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

import {
  FixtureTeamInterface,
  ParamsRequestStatisticsInterface,
  StatisticsTeamInterface,
} from '../../interfaces';
import { FIXTURE_MOCK } from '../../mocks/fixture-team.mocks';
import { MOCK_STATISTICS_TEAM } from '../../mocks/statistics-team.mock';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor(private readonly httpClient: HttpClient) {}

  public getLeagues({
    ...request
  }: ParamsRequestStatisticsInterface): Observable<StatisticsTeamInterface[]> {
    const params = new HttpParams()
      .set('league', request.league as number)
      .set('season', request.season as number);

    // return this.httpClient
    //   .get<any>(`${environment.api}/standings`, { params })
    //   .pipe(
    //     map((resp) => {
    //       const result = {
    //         response: resp.response[0].league.standings,
    //       };
    //       return result.response[0];
    //     }),
    //     tap((response) => console.log('response API: ', response)),
    //   );

    return of(MOCK_STATISTICS_TEAM as any).pipe(
      map((resp) => {
        const result = {
          response: resp.response[0].league.standings,
        };
        return result.response[0];
      }),
      tap((response) => console.log('response API: ', response))
    );
  }

  public getStatisticsTeam(id: number): Observable<FixtureTeamInterface[]> {
    const params = new HttpParams().set('team', id).set('last', 10);

    // return this.httpClient
    //   .get<any>(`${environment.api}/fixtures`, { params })
    //   .pipe(
    //     tap((resp) => console.log('antes do map: ', resp)),
    //     map((resp) => resp.response),
    //     tap((resp) => console.log('response API: ', resp)),
    //   );

    return of(FIXTURE_MOCK).pipe(
      map((resp) => resp.response),
      tap((resp) => console.log('response API: ', resp))
    );
  }
}
