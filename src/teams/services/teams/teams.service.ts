import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/typeorm/entities/Team';
import { GetTeamParams } from 'src/utils/GetTeamParams';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}

  getTeams() {
    return this.teamRepository.query(`SELECT * FROM teams WHERE sec_team=TRUE`);
  }

  async getTeam(params: GetTeamParams) {
    const team = params.team.replace(/_/g, ' ');
    const teamObj = await this.teamRepository.query(
      `SELECT * FROM teams WHERE name='${team}'`,
    );
    const gamesObj = await this.teamRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, ta.name AS away_team, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name='${team}' OR ta.name='${team}'
      ORDER BY game_date`,
    );
    return { ...teamObj[0], games: gamesObj };
  }
}
