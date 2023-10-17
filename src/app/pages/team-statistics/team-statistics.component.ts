import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { finalize, take } from 'rxjs';

import { RoutesEnum } from './../../shared/enums/routes.enum';
import { FixtureTeamInterface } from './../../shared/interfaces/fixture-team.interface';
import { BaseResource } from './../../shared/resources/base.resource';
import { StatisticsService } from './../../shared/services/statistics/statistics.service';

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.component.html',
  styleUrls: ['./team-statistics.component.scss'],
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
})
export class TeamStatisticsComponent extends BaseResource implements OnInit {
  public scoreboard!: FixtureTeamInterface[];

  constructor(
    protected override injector: Injector,
    private readonly statisticsService: StatisticsService,
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    const team = this.activatedRoute.snapshot.params['id'];
    console.log('team: ', team);
    this.getStatisticsTeam(team);
  }

  public backPage(): void {
    this.router.navigateByUrl(`/${RoutesEnum.HOME}`);
  }

  public getStatisticsTeam(id: number): void {
    setTimeout(() => this.loading$.next(true), 100);

    this.statisticsService
      .getStatisticsTeam(id)
      .pipe(
        take(1),
        finalize(() => setTimeout(() => this.loading$.next(false), 1000)),
      )
      .subscribe({
        next: (resp) => {
          console.log('response component: ', resp);
          this.scoreboard = resp;
        },
      });
  }
}
