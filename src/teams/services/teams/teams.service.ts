import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from 'src/typeorm/entities/Team';
import { TeamParams } from 'src/utils/TeamParams';
import { Repository } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}

  getTeams() {
    return this.teamRepository.query(`SELECT * FROM teams WHERE sec_team=TRUE`);
  }

  searchTeams(name: string) {
    const team = name.replace(/_/g, ' ');

    return this.teamRepository.query(
      `SELECT id, name, mascot FROM teams WHERE name LIKE ? AND sec_team=TRUE ORDER BY name`,
      [`%${team}%`],
    );
  }

  async getTeam(params: TeamParams) {
    const team = params.team.replace(/_/g, ' ');

    const teamObj = await this.teamRepository.query(
      `SELECT * FROM teams WHERE name=?`,
      [team],
    );

    const gamesObj = await this.teamRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name=? OR ta.name=?
      ORDER BY game_date`,
      [team, team],
    );
    return { ...teamObj[0], games: gamesObj };
  }
}
