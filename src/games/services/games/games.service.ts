import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { GetTeamParams } from 'src/utils/GetTeamParams';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
  ) {}

  getGames() {
    return this.gameRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, ta.name AS away_team, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id`,
    );
  }

  async getNextGame(params: GetTeamParams) {
    const team = params.team.replace(/_/g, ' ');
    const today = new Date().toISOString().split('T')[0];

    const teamObj = await this.gameRepository.query(
      `SELECT * FROM teams WHERE name='${team}'`,
    );
    const gamesObj = await this.gameRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, ta.name AS away_team, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name='${team}' OR ta.name='${team}'
      AND g.game_date >= '${today}'
      ORDER BY game_date
      LIMIT 1`,
    );

    return { ...teamObj[0], next_game: { ...(gamesObj[0] || null) } };
  }
}
