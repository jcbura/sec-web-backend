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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const typeorm_1 = require("typeorm");
const Team_1 = require("./Team");
let Game = class Game {
};
exports.Game = Game;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Game.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false }),
    __metadata("design:type", String)
], Game.prototype, "game_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time', nullable: true, default: null }),
    __metadata("design:type", String)
], Game.prototype, "game_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Game.prototype, "stadium", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Team_1.Team, (team) => team.home_games),
    (0, typeorm_1.JoinColumn)({ name: 'home_id' }),
    __metadata("design:type", Team_1.Team)
], Game.prototype, "home_team", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Team_1.Team, (team) => team.away_games),
    (0, typeorm_1.JoinColumn)({ name: 'away_id' }),
    __metadata("design:type", Team_1.Team)
], Game.prototype, "away_team", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: null }),
    __metadata("design:type", Number)
], Game.prototype, "home_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: null }),
    __metadata("design:type", Number)
], Game.prototype, "away_score", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: false, default: 1 }),
    __metadata("design:type", Boolean)
], Game.prototype, "conference_game", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: false, default: 0 }),
    __metadata("design:type", Boolean)
], Game.prototype, "neutral_site", void 0);
exports.Game = Game = __decorate([
    (0, typeorm_1.Entity)({ name: 'games' })
], Game);
//# sourceMappingURL=Game.js.map