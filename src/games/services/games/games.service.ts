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
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site, g.game_played
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
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site, g.game_played
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE (th.name=? OR ta.name=?)
      AND g.game_played=FALSE
      AND g.game_date >= ?
      ORDER BY game_date
      LIMIT 1`,
      [team, team, today],
    );

    let nextGame = gamesObj[0] || null;

    if (!nextGame) {
      const recentGamesObj = await this.gameRepository.query(
        `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site, g.game_played
        FROM games g
        JOIN teams th ON g.home_id = th.id
        JOIN teams ta ON g.away_id = ta.id
        WHERE (th.name=? OR ta.name=?)
        AND g.game_played=TRUE
        AND g.game_date < ?
        ORDER BY game_date DESC
        LIMIT 1`,
        [team, team, today],
      );

      nextGame = recentGamesObj[0] || null;
    }

    return { ...teamObj[0], next_game: nextGame };
  }

  async getSECCGame() {
    const game = await this.gameRepository.query(
      `SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site, g.game_played
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE game_date='2024-12-07'`,
    );

    return game[0];
  }
}
