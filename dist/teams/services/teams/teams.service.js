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
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Team_1 = require("../../../typeorm/entities/Team");
const typeorm_2 = require("typeorm");
let TeamsService = class TeamsService {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    getTeams(query) {
        if (query.sort === 'alpha') {
            return this.teamRepository.query(`SELECT name, mascot, stadium
        FROM teams
        WHERE sec_team=TRUE
        ORDER BY name`);
        }
        else if (query.sort === 'rank') {
            return this.teamRepository.query(`SELECT name, mascot, stadium
        FROM teams
        WHERE sec_team=TRUE
        ORDER BY
        CASE
        WHEN team_rank IS NOT NULL THEN team_rank
        ELSE 9999 -- Assign a high value to null ranks to push them lower in the sort order
        END ASC,
        name ASC`);
        }
        else if (query.sort === 'record') {
            return this.teamRepository.query(`SELECT name, mascot, stadium
        FROM teams
        WHERE sec_team=TRUE
        ORDER BY
        total_wins DESC,
        total_losses ASC,
        name ASC`);
        }
        return this.teamRepository.query(`SELECT * FROM teams WHERE sec_team=TRUE`);
    }
    searchTeams(name) {
        if (name) {
            const team = name.replace(/_/g, ' ');
            return this.teamRepository.query(`SELECT id, name, mascot FROM teams WHERE name LIKE ? AND sec_team=TRUE ORDER BY name`, [`${team}%`]);
        }
        return [];
    }
    async getTeam(params) {
        const team = params.team.replace(/_/g, ' ');
        const teamObj = await this.teamRepository.query(`SELECT * FROM teams WHERE name=?`, [team]);
        const gamesObj = await this.teamRepository.query(`SELECT g.id AS id, DATE_FORMAT(g.game_date, '%Y-%m-%d') AS game_date, g.game_time, g.stadium, th.name AS home_team, th.mascot AS home_mascot, th.team_rank AS home_rank, ta.name AS away_team, ta.mascot AS away_mascot, ta.team_rank AS away_rank, g.home_score, g.away_score, g.conference_game, g.neutral_site
      FROM games g
      JOIN teams th ON g.home_id = th.id
      JOIN teams ta ON g.away_id = ta.id
      WHERE th.name=? OR ta.name=?
      ORDER BY game_date`, [team, team]);
        return { ...teamObj[0], games: gamesObj };
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Team_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamsService);
//# sourceMappingURL=teams.service.js.map