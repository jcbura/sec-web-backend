import { IsEnum, IsOptional } from 'class-validator';

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
