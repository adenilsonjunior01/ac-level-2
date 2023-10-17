import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { finalize, take } from 'rxjs';

import { CustomTable } from './../../shared/class/custom-table';
import { Leagues } from './../../shared/class/leagues';
import { RoutesEnum } from './../../shared/enums/routes.enum';
import { StateEnum } from './../../shared/enums/state.enum';
import { LeaguesInterface } from './../../shared/interfaces/leagues.interface';
import { ParamsRequestStatisticsInterface } from './../../shared/interfaces/params-request-statistics.interface';
import { StatisticsTeamInterface } from './../../shared/interfaces/statistics-team.interface';
import { TeamInterface } from './../../shared/interfaces/team-interface';
import { BaseResource } from './../../shared/resources/base.resource';
import { StateService } from './../../shared/services/state/state.service';
import { StatisticsService } from './../../shared/services/statistics/statistics.service';

const TAB_INDEX_DEFAULT = 0;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, TabViewModule, TableModule, HttpClientModule],
})
export class HomeComponent extends BaseResource implements OnInit, OnDestroy {
  public tabItems: LeaguesInterface[] = Leagues.teams();
  public teams: StatisticsTeamInterface[] = [];
  public tabColumns = CustomTable.columns();

  constructor(
    protected override injector: Injector,
    private readonly statisticsService: StatisticsService,
    private readonly stateService: StateService
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    const state = this.stateService.getState<LeaguesInterface[]>(
      StateEnum.TAB_KEY
    );

    if (!state) {
      this.onChangeTab(TAB_INDEX_DEFAULT);
    } else {
      this.restoreStateTabs(state);
    }
  }

  public onChangeTab(index: number): void {
    const team = this.tabItems.find((v) => v.index === index);
    this.tabItems.forEach((item, i) => {
      item.selected = i === index;
    });

    this.selectTeam(team);
  }

  public restoreStateTabs(state: LeaguesInterface[]): void {
    this.tabItems = state;
    const team = state.find((v) => v.selected);
    this.selectTeam(team);
    this.stateService.destroy(StateEnum.TAB_KEY);
  }

  private selectTeam(team?: LeaguesInterface): void {
    if (team) {
      this.getStatitics({
        teamId: team.id,
        league: team.league,
        season: team.season,
      });
    }
  }

  public trackById(index: number, item: LeaguesInterface): number {
    return item.id;
  }

  private getStatitics({ ...request }: ParamsRequestStatisticsInterface): void {
    setTimeout(() => this.loading$.next(true), 100);

    this.statisticsService
      .getLeagues(request)
      .pipe(
        take(1),
        finalize(() => setTimeout(() => this.loading$.next(false), 1000))
      )
      .subscribe({
        next: (resp) => {
          this.teams = resp;
        },
      });
  }

  public redirect(team: TeamInterface): void {
    this.router.navigate([`/${RoutesEnum.TEAM_STATISTICS}/${team.id}`]);
  }

  override ngOnDestroy(): void {
    this.loading$?.complete();
    this.stateService.setState<any>(StateEnum.TAB_KEY, this.tabItems);
  }
}
