import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { TeamStatisticsComponent } from './app/pages/team-statistics/team-statistics.component';
import { RoutesEnum } from './app/shared/enums';

const routes: Routes = [
  {
    path: RoutesEnum.HOME,
    redirectTo: RoutesEnum.HOME,
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.HOME,
    component: HomeComponent,
    data: {
      title: 'Início',
    },
  },
  {
    path: `${RoutesEnum.TEAM_STATISTICS}/:id`,
    component: TeamStatisticsComponent,
    data: {
      title: 'Estatísticas',
    },
  },
  {
    path: '**',
    redirectTo: RoutesEnum.HOME,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
