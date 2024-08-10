import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { TeamParams } from 'src/utils/definitions';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
  ) {}

  getGames() {
    return this.gameRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id`,
    );
  }

  async getNextGame(params: TeamParams) {
    const team = params.team.replace(/_/g, ' ');
    const today = new Date().toISOString().split('T')[0];

    const teamObj = await this.gameRepository.query(
      `SELECT * FROM teams WHERE name=?`,
      [team],
    );
    const gamesObj = await this.gameRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name=? OR ta.name=?
      AND g.game_date >= ?
      ORDER BY game_date
      LIMIT 1`,
      [team, team, today],
    );

    return { ...teamObj[0], next_game: { ...(gamesObj[0] || null) } };
  }
}
