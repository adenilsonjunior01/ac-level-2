export interface ScoreInterface {
  halftime: HalftimeInterface;
  fulltime: FulltimeInterface;
  extratime: ExtratimeInterface;
  penalty: PenaltyInterface;
}

export interface HalftimeInterface {
  home: number;
  away: number;
}

export interface FulltimeInterface {
  home: number;
  away: number;
}

export interface ExtratimeInterface {
  home: any;
  away: any;
}

export interface PenaltyInterface {
  home: any;
  away: any;
}
