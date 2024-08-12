"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Game_1 = require("../../../typeorm/entities/Game");
const typeorm_2 = require("typeorm");
let GamesService = class GamesService {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }
    getGames() {
        return this.gameRepository.query(`SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id`);
    }
    async getNextGame(params) {
        const team = params.team.replace(/_/g, ' ');
        const today = new Date().toISOString().split('T')[0];
        const teamObj = await this.gameRepository.query(`SELECT * FROM teams WHERE name=?`, [team]);
        const gamesObj = await this.gameRepository.query(`SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name=? OR ta.name=?
      AND g.game_date >= ?
      ORDER BY game_date
      LIMIT 1`, [team, team, today]);
        return { ...teamObj[0], next_game: { ...(gamesObj[0] || null) } };
    }
    async getSECCGame() {
        const game = await this.gameRepository.query(`SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE game_date='2024-12-07'`);
        return game[0];
    }
};
exports.GamesService = GamesService;
exports.GamesService = GamesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Game_1.Game)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GamesService);
//# sourceMappingURL=games.service.js.map