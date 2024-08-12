import { TeamsService } from 'src/teams/services/teams/teams.service';
import { TeamParams } from 'src/dtos/TeamParams.dto';
import { TeamQuery } from 'src/dtos/TeamQuery.dto';
export declare class TeamsController {
    private readonly teamService;
    constructor(teamService: TeamsService);
    getTeams(query?: TeamQuery): Promise<any>;
    searchTeams(name: string): any[] | Promise<any>;
    getTeam(params: TeamParams): Promise<any>;
}
