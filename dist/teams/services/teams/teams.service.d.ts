import { Team } from 'src/typeorm/entities/Team';
import { TeamParams } from 'src/dtos/TeamParams.dto';
import { TeamQuery } from 'src/dtos/TeamQuery.dto';
import { Repository } from 'typeorm';
export declare class TeamsService {
    private readonly teamRepository;
    constructor(teamRepository: Repository<Team>);
    getTeams(query?: TeamQuery): Promise<any>;
    searchTeams(name: string): any[] | Promise<any>;
    getTeam(params: TeamParams): Promise<any>;
}
