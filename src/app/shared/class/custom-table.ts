import { TableColumnInterface } from '../interfaces';

export class CustomTable {
  public static columns(): TableColumnInterface[] {
    return [
      { field: '-', header: '-' },
      { field: '-', header: '-' },
      { field: 'name', header: 'Name' },
      { field: 'games', header: 'Games' },
      { field: 'W', header: 'W' },
      { field: 'L', header: 'L' },
      { field: 'D', header: 'D' },
      { field: 'goal', header: 'Goal Difference' },
      { field: 'points', header: 'Points' },
    ];
  }
}
