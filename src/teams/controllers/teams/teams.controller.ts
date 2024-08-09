import { Controller, Get, Param } from '@nestjs/common';
import { TeamsService } from 'src/teams/services/teams/teams.service';
import { GetTeamParams } from 'src/utils/GetTeamParams';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Get()
  getTeams() {
    return this.teamService.getTeams();
  }

  @Get(':team')
  getTeam(@Param() params: GetTeamParams) {
    return this.teamService.getTeam(params);
  }
}
