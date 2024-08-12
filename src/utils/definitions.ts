import { IsEnum, IsOptional } from 'class-validator';

enum TeamEnum {
  ALABAMA = 'alabama',
  ARKANSAS = 'arkansas',
  AUBURN = 'auburn',
  FLORIDA = 'florida',
  GEORGIA = 'georgia',
  KENTUCKY = 'kentucky',
  LSU = 'lsu',
  MISSISSIPPI_STATE = 'mississippi_state',
  MISSOURI = 'missouri',
  OKLAHOMA = 'oklahoma',
  OLE_MISS = 'ole_miss',
  SOUTH_CAROLINA = 'south_carolina',
  TENNESSEE = 'tennessee',
  TEXAS = 'texas',
  TEXAS_AM = 'texas_a&m',
  VANDERBILT = 'vanderbilt',
}

export class TeamParams {
  @IsEnum(TeamEnum)
  team: TeamEnum;
}

enum TeamQueryEnum {
  ALPHABETICAL = 'alpha',
  RANK = 'rank',
  RECORD = 'record',
}

export class TeamQuery {
  @IsEnum(TeamQueryEnum)
  @IsOptional()
  sort: TeamQueryEnum;
}
