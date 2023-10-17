import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import {
  FixtureTeamInterface,
  ParamsRequestStatisticsInterface,
  StatisticsTeamInterface,
} from '../../interfaces';

import { environment } from '../../../../environments/environment';
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

    return this.httpClient
      .get<any>(`${environment.api}/standings`, { params })
      .pipe(
        map((resp) => {
          const result = {
            response: resp.response[0].league.standings,
          };
          return result.response[0];
        }),
        tap((response) => console.log('response API: ', response)),
      );
  }

  public getStatisticsTeam(id: number): Observable<FixtureTeamInterface[]> {
    const params = new HttpParams().set('team', id).set('last', 10);

    return this.httpClient
      .get<any>(`${environment.api}/fixtures`, { params })
      .pipe(
        map((resp) => resp.response),
        tap((resp) => console.log('response API: ', resp)),
      );
  
  }
}
