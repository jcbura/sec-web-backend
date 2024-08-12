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
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const Game_1 = require("./Game");
let Team = class Team {
};
exports.Team = Team;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Team.prototype, "mascot", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Team.prototype, "stadium", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "total_wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "total_losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "conference_wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "conference_losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "home_wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "home_losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "away_wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "away_losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "neutral_wins", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Team.prototype, "neutral_losses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, default: null }),
    __metadata("design:type", Number)
], Team.prototype, "team_rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, default: null }),
    __metadata("design:type", String)
], Team.prototype, "primary_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, default: null }),
    __metadata("design:type", String)
], Team.prototype, "secondary_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', nullable: true, default: 0 }),
    __metadata("design:type", Boolean)
], Team.prototype, "sec_team", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Game_1.Game, (game) => game.home_team),
    __metadata("design:type", Array)
], Team.prototype, "home_games", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Game_1.Game, (game) => game.away_team),
    __metadata("design:type", Array)
], Team.prototype, "away_games", void 0);
exports.Team = Team = __decorate([
    (0, typeorm_1.Entity)({ name: 'teams' })
], Team);
//# sourceMappingURL=Team.js.map