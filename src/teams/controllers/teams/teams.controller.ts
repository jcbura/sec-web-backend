import { Controller, Get, Param, Query } from '@nestjs/common';
import { TeamsService } from 'src/teams/services/teams/teams.service';
import { TeamParams } from 'src/utils/TeamParams';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Get()
  getTeams() {
    return this.teamService.getTeams();
  }

  @Get('search')
  searchTeams(@Query('name') name: string) {
    return this.teamService.searchTeams(name);
  }

  @Get(':team')
  getTeam(@Param() params: TeamParams) {
    return this.teamService.getTeam(params);
  }
}
